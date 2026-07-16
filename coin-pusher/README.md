# Coin Pusher Deluxe

Volledig losstaande webgame (geen build, geen server nodig): open `index.html` in een browser.

## Spelen
- **Klik/tik** op het veld om een munt te laten vallen; de kolom bepaalt waar hij landt.
- Het duwplatform beweegt heen en weer; munten die over de voorrand vallen worden uitbetaald.
- Munten die door de **zijgaten** glippen ben je kwijt — koop *Zijschermen* om ze te verkleinen.
- **Timing** loont: een munt die valt terwijl het platform ingetrokken is, wordt de volle slag meegeduwd.

## Features
- Fysica via een lokaal gevendorde **Matter.js** (top-down: zwaartekracht uit, tafelwrijving via `frictionAir`).
- Economie met 4 munt-tiers (brons/zilver/goud/platina), upgrades, multiplierzone, power-ups (×2-boost, muntenregen, jackpot).
- Progressie: XP/levels, 12 achievements, prestige met permanente uitbetalingsmultiplier.
- Voortgang (incl. muntposities op tafel) wordt automatisch in `localStorage` bewaard.

## Projectstructuur
```
index.html          shell (HUD, canvas, winkel-modal)
css/style.css       thema en UI-componenten
js/config.js        alle constanten en tuning
js/state.js         game state + save/load
js/physics.js       Matter.js-wereld (pusher, munten, zijgaten)
js/upgrades.js      upgrade-definities en effecten
js/progress.js      XP, achievements, prestige
js/ui.js            DOM: HUD, winkel, toasts, iconen
js/game.js          loop, canvas-rendering, input, power-ups, audio
js/vendor/          matter.min.js (0.20.0)
```

## Tuning
De pushermechanica is gevoelig voor geometrie: munten komen nooit verder dan
`pusher.frontY + h/2 + muntstraal`; alles daarbuiten beweegt door **volumedruk**
van de dicht opeengepakte stapel. Daarom wordt de tafel bij een nieuw spel tot
verzadiging gezaaid en met `seed.warmupMs` physics-warmup aangedrukt.
Alle knoppen zitten in `js/config.js`.
