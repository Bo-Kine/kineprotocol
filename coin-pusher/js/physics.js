'use strict';

/* Matter.js-wereld: top-down coin pusher.
   Zwaartekracht staat uit; tafelwrijving komt van frictionAir.
   De pusher is een statisch blok dat per tick verplaatst wordt en zo munten duwt. */
const Physics = (() => {
  const { Engine, Bodies, Body, Composite } = Matter;
  const W = Config.W, WALL = Config.WALL;

  let engine = null;
  let pusher = null;
  let pusherPhase = 0; // start volledig ingetrokken
  let pusherY = Config.pusher.backY;
  let speedFactor = 1;
  let sideWalls = [];
  const coins = new Set();

  function init() {
    engine = Engine.create();
    engine.gravity.x = 0;
    engine.gravity.y = 0;
    engine.positionIterations = 10; // stijvere duwketens door de dichte stapel
    engine.velocityIterations = 8;
    const back = Bodies.rectangle(W / 2, -40, W + 80, 60, { isStatic: true, label: 'wall' });
    pusher = Bodies.rectangle(W / 2, Config.pusher.backY, Config.pusher.w, Config.pusher.h, {
      isStatic: true, label: 'pusher',
    });
    Composite.add(engine.world, [back, pusher]);
    rebuildSideWalls(0);
  }

  function gutterOpening(guardLevel) {
    const g = Config.gutter;
    return Math.max(g.minOpen, g.baseOpen - guardLevel * g.perGuard);
  }

  /* Zijwanden bestaan uit segmenten met een gat (gutter) erin. */
  function rebuildSideWalls(guardLevel) {
    for (const b of sideWalls) Composite.remove(engine.world, b);
    sideWalls = [];
    const open = gutterOpening(guardLevel);
    const gy = Config.gutter.centerY;
    const segs = [[-60, gy - open / 2], [gy + open / 2, Config.EDGE_Y + 70]];
    for (const [y0, y1] of segs) {
      const h = y1 - y0, cy = y0 + h / 2;
      sideWalls.push(
        Bodies.rectangle(WALL / 2, cy, WALL, h, { isStatic: true, label: 'wall' }),
        Bodies.rectangle(W - WALL / 2, cy, WALL, h, { isStatic: true, label: 'wall' }),
      );
    }
    Composite.add(engine.world, sideWalls);
  }

  function spawnCoin(x, y, tierIdx = 0, kind = 'coin', sub = null) {
    const t = Config.tiers[tierIdx];
    const r = kind === 'powerup' ? 17 : t.r;
    const body = Bodies.circle(x, y, r, {
      friction: 0.05,
      frictionStatic: 0.1,
      frictionAir: 0.045,
      restitution: 0.02,
      density: 0.002 * (kind === 'powerup' ? 1 : 1 + tierIdx * 0.35),
      label: kind,
    });
    Body.setAngle(body, Math.random() * Math.PI * 2);
    body.plugin = { tier: tierIdx, kind, sub };
    coins.add(body);
    Composite.add(engine.world, body);
    return body;
  }

  function removeCoin(body) {
    coins.delete(body);
    Composite.remove(engine.world, body);
  }

  function movePusher(dtMs) {
    const p = Config.pusher;
    const period = p.basePeriod / speedFactor;
    pusherPhase += (dtMs / 1000) * (Math.PI * 2 / period);
    const mid = (p.backY + p.frontY) / 2;
    const amp = (p.frontY - p.backY) / 2;
    pusherY = mid - Math.cos(pusherPhase) * amp;
    Body.setPosition(pusher, { x: W / 2, y: pusherY });
  }

  function snapshot(b) {
    return {
      x: b.position.x, y: b.position.y,
      tier: b.plugin.tier, kind: b.plugin.kind, sub: b.plugin.sub,
    };
  }

  /* Verzamel munten die over de voorrand of door een zijgat zijn gevallen. */
  function harvest() {
    const collected = [], lost = [];
    for (const b of [...coins]) {
      const r = b.circleRadius, x = b.position.x, y = b.position.y;
      if (y - r > Config.EDGE_Y) {
        collected.push(snapshot(b));
        removeCoin(b);
      } else if (x < WALL + 2 || x > W - WALL - 2) {
        lost.push(snapshot(b));
        removeCoin(b);
      } else if (y < Config.pusher.backY + Config.pusher.h / 2 - Config.WALL || y > Config.H + 120) {
        removeCoin(b); // vangnet: door de pusher getunnelde of ontsnapte munten
      }
    }
    return { collected, lost };
  }

  function step(dtMs) {
    movePusher(dtMs);
    Engine.update(engine, dtMs);
    return harvest();
  }

  function seedTable() {
    const s = Config.seed;
    for (let y = s.yStart; y <= s.yEnd; y += s.step) {
      for (let x = WALL + 24; x <= W - WALL - 24; x += s.step) {
        if (Math.random() < s.fill) {
          spawnCoin(x + (Math.random() - 0.5) * 10, y + (Math.random() - 0.5) * 10, 0);
        }
      }
    }
  }

  /* Simuleert vooruit zodat een vers gezaaide tafel al compact en stabiel start. */
  function warmup(ms) {
    for (let t = 0; t < ms; t += Config.STEP) {
      movePusher(Config.STEP);
      Engine.update(engine, Config.STEP);
      harvest(); // gevallen warmup-munten verdwijnen zonder uitbetaling
    }
  }

  function serializeTable() {
    return [...coins]
      .filter(b => b.plugin.kind === 'coin')
      .map(b => ({ x: Math.round(b.position.x), y: Math.round(b.position.y), t: b.plugin.tier }));
  }

  function restoreTable(arr) {
    for (const c of arr) spawnCoin(c.x, c.y, c.t);
  }

  function clearCoins() {
    for (const b of [...coins]) removeCoin(b);
  }

  return {
    init, step, spawnCoin, seedTable, warmup, serializeTable, restoreTable, clearCoins,
    rebuildSideWalls, gutterOpening,
    setSpeedFactor: f => { speedFactor = f; },
    getCoins: () => coins,
    coinCount: () => [...coins].filter(b => b.plugin.kind === 'coin').length,
    pusherRect: () => ({ x: W / 2, y: pusherY, w: Config.pusher.w, h: Config.pusher.h }),
  };
})();
