/* ===========================
   MIGUEL 4 ANOS — PAW PATROL
   style.css — versão encerrada
   =========================== */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --blue:       #1565C0;
  --blue-mid:   #1976D2;
  --blue-light: #42A5F5;
  --red:        #D32F2F;
  --red-light:  #EF5350;
  --yellow:     #F9A825;
  --yellow-light:#FFD54F;
  --white:      #FFFFFF;
  --off-white:  #F0F7FF;
  --dark:       #0D1B2A;
  --text:       #1A237E;
  --shadow:     0 8px 32px rgba(21,101,192,0.25);
  --radius:     20px;
  --radius-sm:  12px;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Nunito', sans-serif;
  background: var(--off-white);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

/* ── CONFETTI CANVAS ── */
#confetti-canvas {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none; z-index: 9999;
}

/* ── PAWS BACKGROUND ── */
.paws-bg { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
.paws-bg::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    radial-gradient(ellipse 60% 40% at 20% 20%, rgba(21,101,192,0.08) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 80% 80%, rgba(211,47,47,0.07) 0%, transparent 70%),
    radial-gradient(ellipse 40% 30% at 50% 50%, rgba(249,168,37,0.05) 0%, transparent 60%);
}

/* ══════════════════════════════════
   SEÇÃO 1 — NEYMAR HERO
   ══════════════════════════════════ */
.neymar-hero {
  position: relative;
  z-index: 1;
  background: linear-gradient(160deg, #0D47A1 0%, #1565C0 60%, #1976D2 100%);
  padding: 40px 20px 50px;
  text-align: center;
  overflow: hidden;
}
.neymar-hero::before {
  content: '';
  position: absolute; bottom: -2px; left: 0; right: 0;
  height: 50px;
  background: var(--off-white);
  clip-path: ellipse(55% 100% at 50% 100%);
}
.neymar-hero::after {
  content: '★ ★ ★ ★ ★ ★ ★ ★';
  position: absolute; top: 14px; left: 0; right: 0;
  font-size: 10px; color: rgba(255,255,255,0.2);
  letter-spacing: 20px;
  animation: shimmer 3s ease-in-out infinite alternate;
}
@keyframes shimmer {
  from { opacity: 0.2; letter-spacing: 18px; }
  to   { opacity: 0.5; letter-spacing: 22px; }
}

.neymar-wrap {
  position: relative;
  display: inline-block;
  max-width: 480px;
  width: 100%;
}

.neymar-img {
  width: 100%;
  max-width: 480px;
  border-radius: 24px;
  border: 4px solid var(--yellow);
  box-shadow: 0 16px 48px rgba(0,0,0,0.5);
  display: block;
  margin: 0 auto;
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}

/* Papel sobreposto na imagem — posição sobre a mão do Neymar */
.neymar-paper {
  position: absolute;
  /* calibrado para cobrir o papel na foto */
  top: 8%;
  left: 12%;
  width: 56%;
  background: #fffde7;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  box-shadow: 2px 3px 8px rgba(0,0,0,0.35);
  transform: rotate(-2deg);
  z-index: 10;
  /* leve textura de papel */
  background-image: repeating-linear-gradient(
    transparent,
    transparent 18px,
    rgba(100,149,237,0.12) 18px,
    rgba(100,149,237,0.12) 19px
  );
}
.neymar-paper span {
  font-family: 'Nunito', sans-serif;
  font-size: clamp(9px, 2.8vw, 14px);
  font-weight: 900;
  color: #1a1a1a;
  text-align: center;
  line-height: 1.3;
}
.neymar-paper-destaque {
  font-family: 'Fredoka One', cursive !important;
  font-size: clamp(11px, 3.2vw, 16px) !important;
  color: var(--red) !important;
  margin-top: 4px;
}

/* ══════════════════════════════════
   SEÇÃO 2 — CARD ENCERRAMENTO
   ══════════════════════════════════ */
.encerramento-section {
  position: relative; z-index: 1;
  padding: 50px 16px 20px;
  max-width: 600px;
  margin: 0 auto;
}

.encerramento-card {
  background: linear-gradient(160deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%);
  border-radius: 28px;
  padding: 36px 30px 30px;
  text-align: center;
  box-shadow:
    0 20px 60px rgba(0,0,0,0.30),
    0 0 0 3px var(--yellow),
    0 0 0 6px rgba(249,168,37,0.25);
  position: relative; overflow: hidden;
  animation: encerramento-glow 3s ease-in-out infinite;
}
@keyframes encerramento-glow {
  0%,100% { box-shadow: 0 20px 60px rgba(0,0,0,0.30), 0 0 0 3px var(--yellow), 0 0 0 6px rgba(249,168,37,0.20); }
  50%      { box-shadow: 0 20px 60px rgba(0,0,0,0.30), 0 0 0 3px var(--yellow), 0 0 0 12px rgba(249,168,37,0.38); }
}
.encerramento-card::before {
  content: ''; position: absolute; top: -50px; right: -50px;
  width: 180px; height: 180px; background: rgba(255,255,255,0.04); border-radius: 50%;
}
.encerramento-card::after {
  content: ''; position: absolute; bottom: -60px; left: -60px;
  width: 220px; height: 220px; background: rgba(249,168,37,0.05); border-radius: 50%;
}

.encerramento-card-icon {
  font-size: 52px; margin-bottom: 14px; display: block;
  animation: lock-pulse 2s ease-in-out infinite alternate;
}
@keyframes lock-pulse {
  from { transform: scale(1);    opacity: 0.9; }
  to   { transform: scale(1.08); opacity: 1;   }
}
.encerramento-card-title {
  font-family: 'Fredoka One', cursive;
  font-size: clamp(24px, 6vw, 34px);
  color: var(--yellow);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.5), 0 0 20px rgba(249,168,37,0.35);
  margin-bottom: 20px;
}
.encerramento-card-msg {
  font-size: clamp(14px, 3.2vw, 17px);
  font-weight: 700;
  color: rgba(255,255,255,0.93);
  line-height: 1.75; margin-bottom: 16px;
}
.encerramento-card-msg strong { color: var(--yellow-light); }
.encerramento-card-sub {
  font-family: 'Fredoka One', cursive;
  font-size: clamp(14px, 3.2vw, 17px);
  color: rgba(255,255,255,0.75);
  margin-bottom: 20px; font-style: italic;
}
.encerramento-patas {
  font-size: 22px; letter-spacing: 10px; opacity: 0.6;
  animation: wag-patas 2s ease-in-out infinite alternate;
}
@keyframes wag-patas {
  from { letter-spacing: 7px;  opacity: 0.5; }
  to   { letter-spacing: 13px; opacity: 0.8; }
}

/* ══════════════════════════════════
   SEÇÃO 3 — HERO / ENCARTE
   ══════════════════════════════════ */
.hero {
  position: relative; z-index: 1;
  background: linear-gradient(160deg, var(--blue) 0%, var(--blue-mid) 50%, #0D47A1 100%);
  padding: 50px 20px 50px;
  text-align: center; overflow: hidden;
}
.hero::before {
  content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
  height: 50px; background: var(--off-white);
  clip-path: ellipse(55% 100% at 50% 100%);
}
.hero::after {
  content: '★ ★ ★ ★ ★ ★ ★ ★';
  position: absolute; top: 14px; left: 0; right: 0;
  font-size: 10px; color: rgba(255,255,255,0.2);
  letter-spacing: 20px;
  animation: shimmer 3s ease-in-out infinite alternate;
}

.hero-badge {
  display: inline-block;
  background: var(--yellow); color: var(--dark);
  font-family: 'Fredoka One', cursive; font-size: 13px;
  letter-spacing: 1.5px; padding: 6px 20px; border-radius: 50px;
  margin-bottom: 24px; animation: bounce-in 0.6s ease-out;
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
}
.hero-banner {
  max-width: 520px; width: 100%; border-radius: 24px;
  border: 4px solid var(--yellow); box-shadow: 0 12px 40px rgba(0,0,0,0.4);
  animation: float 4s ease-in-out infinite;
  display: block; margin: 0 auto 24px;
}
.hero-tagline {
  color: rgba(255,255,255,0.9); font-size: clamp(15px, 3.5vw, 18px);
  font-weight: 700; margin-bottom: 28px;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
}

/* ── COUNTDOWN ── */
.countdown-wrapper {
  background: rgba(255,255,255,0.12); border: 2px solid rgba(255,255,255,0.25);
  border-radius: var(--radius); padding: 20px 24px;
  max-width: 480px; margin: 0 auto; backdrop-filter: blur(10px);
}
.countdown-label {
  color: var(--yellow-light); font-size: 13px; font-weight: 800;
  letter-spacing: 1px; margin-bottom: 14px; text-transform: uppercase;
}
.countdown-boxes { display: flex; align-items: center; justify-content: center; gap: 8px; }
.count-box {
  display: flex; flex-direction: column; align-items: center;
  background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3);
  border-radius: var(--radius-sm); padding: 10px 14px; min-width: 64px;
}
.count-box span {
  font-family: 'Fredoka One', cursive;
  font-size: clamp(26px, 7vw, 38px); color: var(--white); line-height: 1;
}
.count-box small {
  font-size: 10px; color: rgba(255,255,255,0.7);
  font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px;
}
.count-sep {
  font-family: 'Fredoka One', cursive; font-size: 28px; color: var(--yellow);
  animation: blink 1s step-end infinite; padding-bottom: 18px;
}
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.2; } }
.event-passed {
  color: var(--yellow-light); font-size: 16px; font-weight: 800; margin-top: 12px;
}

/* ── EVENT DETAILS ── */
.event-details {
  position: relative; z-index: 1;
  padding: 50px 20px 30px; text-align: center;
  max-width: 700px; margin: 0 auto;
}
.section-title {
  font-family: 'Fredoka One', cursive;
  font-size: clamp(22px, 5vw, 30px); color: var(--blue); margin-bottom: 24px;
}
.details-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 14px; margin-bottom: 24px;
}
@media (max-width: 480px) { .details-grid { grid-template-columns: 1fr; } }
.detail-card {
  background: var(--white); border-radius: var(--radius);
  padding: 20px 12px; box-shadow: var(--shadow);
  border: 2px solid rgba(21,101,192,0.1); transition: transform 0.2s ease;
}
.detail-card:hover { transform: translateY(-4px); }
.detail-icon { font-size: 28px; margin-bottom: 6px; }
.detail-label {
  font-size: 11px; font-weight: 800; color: var(--blue-light);
  text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;
}
.detail-value {
  font-family: 'Fredoka One', cursive;
  font-size: clamp(16px, 3.5vw, 20px); color: var(--blue);
}
.maps-btn {
  display: inline-block;
  background: linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%);
  color: var(--white); font-family: 'Fredoka One', cursive; font-size: 17px;
  padding: 14px 32px; border-radius: 50px; text-decoration: none;
  box-shadow: 0 6px 20px rgba(211,47,47,0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease; letter-spacing: 0.5px;
}
.maps-btn:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 10px 28px rgba(211,47,47,0.45); }

/* ── FOOTER ── */
.site-footer {
  position: relative; z-index: 1;
  background: var(--blue); color: rgba(255,255,255,0.8);
  text-align: center; padding: 28px 20px;
}
.footer-paws { font-size: 24px; letter-spacing: 8px; margin-bottom: 8px; opacity: 0.6; }
.site-footer p { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
.footer-small { font-size: 11px !important; letter-spacing: 2px; opacity: 0.5; }

/* ── UTILITIES ── */
.hidden { display: none !important; }

@keyframes bounce-in {
  0%   { transform: scale(0.5); opacity: 0; }
  70%  { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
}

/* ── BOTÃO FLUTUANTE ÁUDIO ── */
#audio-btn {
  position: fixed; bottom: 20px; right: 20px; z-index: 9999;
  width: 48px; height: 48px; border-radius: 50%; border: none;
  background: linear-gradient(135deg, #1565C0, #0D47A1);
  color: #fff; font-size: 20px; cursor: pointer;
  box-shadow: 0 4px 16px rgba(21,101,192,0.45);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex; align-items: center; justify-content: center;
}
#audio-btn:hover { transform: scale(1.1); box-shadow: 0 8px 24px rgba(21,101,192,0.55); }

@media print {
  #audio-btn { display: none !important; }
}
