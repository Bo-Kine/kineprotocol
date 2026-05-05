// KineProtocol — Auth: Supabase config, login/logout, sessie-sync

// ── SUPABASE CONFIG ──
const SUPA_URL = 'https://vcxlozcpxjebwbdosfbt.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjeGxvemNweGplYndiZG9zZmJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzYzNzAsImV4cCI6MjA5MTkxMjM3MH0.Ld1LPj08wgAnOobpvGlUHCQlnRhPY4N33epFsfFC2MI';

// ── AUTH STATE ──
let currentUser = null; // {id, email, access_token}
let syncStatus = 'idle';
let syncTimeout = null;

function getAuthHeaders() {
  const token = currentUser ? currentUser.access_token : SUPA_KEY;
  return {
    'Content-Type': 'application/json',
    'apikey': SUPA_KEY,
    'Authorization': 'Bearer ' + token
  };
}

function setSyncStatus(status, msg) {
  syncStatus = status;
  const el = document.getElementById('sync-indicator');
  if(!el) return;
  const icons = {idle:'', syncing:'⟳', ok:'✓', error:'⚠'};
  const colors = {idle:'var(--muted2)', syncing:'#f59e0b', ok:'#22c55e', error:'#ef4444'};
  el.textContent = icons[status] + (msg ? ' ' + msg : '');
  el.style.color = colors[status];
  el.style.display = status === 'idle' ? 'none' : '';
  if(status === 'ok') {
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => setSyncStatus('idle'), 3000);
  }
}

// ── AUTH FUNCTIONS ──
async function signIn(email, password) {
  const res = await fetch(SUPA_URL + '/auth/v1/token?grant_type=password', {
    method: 'POST',
    headers: {'Content-Type':'application/json','apikey':SUPA_KEY},
    body: JSON.stringify({email, password})
  });
  const data = await res.json();
  if(!res.ok) throw new Error(data.error_description || data.msg || 'Inloggen mislukt');
  currentUser = {id: data.user.id, email: data.user.email, access_token: data.access_token, refresh_token: data.refresh_token};
  localStorage.setItem('kp_session', JSON.stringify(currentUser));
  return currentUser;
}

async function signUp(email, password) {
  const res = await fetch(SUPA_URL + '/auth/v1/signup', {
    method: 'POST',
    headers: {'Content-Type':'application/json','apikey':SUPA_KEY},
    body: JSON.stringify({email, password})
  });
  const data = await res.json();
  if(!res.ok) throw new Error(data.error_description || data.msg || 'Registratie mislukt');
  if(data.access_token) {
    currentUser = {id: data.user.id, email: data.user.email, access_token: data.access_token, refresh_token: data.refresh_token};
    localStorage.setItem('kp_session', JSON.stringify(currentUser));
    return currentUser;
  }
  // Email confirmation required
  return null;
}

async function refreshSession() {
  const session = JSON.parse(localStorage.getItem('kp_session') || 'null');
  if(!session || !session.refresh_token) return false;
  try {
    const res = await fetch(SUPA_URL + '/auth/v1/token?grant_type=refresh_token', {
      method: 'POST',
      headers: {'Content-Type':'application/json','apikey':SUPA_KEY},
      body: JSON.stringify({refresh_token: session.refresh_token})
    });
    if(!res.ok) return false;
    const data = await res.json();
    currentUser = {id: data.user.id, email: data.user.email, access_token: data.access_token, refresh_token: data.refresh_token};
    localStorage.setItem('kp_session', JSON.stringify(currentUser));
    return true;
  } catch(e) { return false; }
}

function signOut() {
  currentUser = null;
  localStorage.removeItem('kp_session');
  localStorage.removeItem('kp_patients');
  Object.keys(localStorage).filter(k => k.startsWith('kp_scores_')).forEach(k => localStorage.removeItem(k));
  updatePatientBadge();
  showLoginScreen();
}

// ── LOGIN SCREEN ──
function showLoginScreen() {
  document.getElementById('app-wrapper').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('login-error').textContent = '';
}

function hideLoginScreen() {
  document.getElementById('app-wrapper').style.display = 'flex';
  document.getElementById('login-screen').style.display = 'none';
  // Update user indicator in topbar
  const userEl = document.getElementById('user-indicator');
  if(userEl && currentUser) {
    userEl.textContent = currentUser.email.split('@')[0];
    userEl.style.display = '';
  }
  const logoutBtn = document.getElementById('logout-btn');
  if(logoutBtn) logoutBtn.style.display = '';
}

async function handleLogin(mode) {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  const btn = document.getElementById('login-btn');
  if(!email || !password) { errEl.textContent = 'Vul e-mail en wachtwoord in.'; return; }
  btn.textContent = '...'; btn.disabled = true;
  try {
    if(mode === 'login') {
      await signIn(email, password);
    } else {
      const result = await signUp(email, password);
      if(!result) {
        errEl.style.color = '#22c55e';
        errEl.textContent = 'Account aangemaakt! Controleer je e-mail om te bevestigen, dan kun je inloggen.';
        btn.textContent = 'Aanmelden'; btn.disabled = false;
        return;
      }
    }
    hideLoginScreen();
    await loadFromSupabase();
  } catch(e) {
    errEl.style.color = '#ef4444';
    errEl.textContent = e.message;
  }
  btn.textContent = mode === 'login' ? 'Inloggen' : 'Account aanmaken';
  btn.disabled = false;
}

