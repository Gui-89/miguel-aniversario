// =========================================
//  script.js — Miguel 4 Anos 🐾
// =========================================
//
//  ✏️ EDITE AS CONFIGURAÇÕES ABAIXO:
// =========================================

const CONFIG = {
  // Data e hora do evento (formato: 'AAAA-MM-DDTHH:MM:SS')
  eventoDataHora: '2026-06-13T18:00:00',  // ← ALTERE AQUI

  // Exibição amigável
  eventoDataTexto: '13 de Junho de 2026',  // ← ALTERE AQUI
  eventoHoraTexto: '18h00',                   // ← ALTERE AQUI

  // Nome e endereço do local
  eventoLocal: 'Hamburgo Adventure ',     // ← ALTERE AQUI
  eventoEndereco: 'Q3 CL 02, Sobradinho 1, Lj 06 — Sobradinho', // ← ALTERE AQUI

  // Link do Google Maps (cole o link de compartilhamento do Maps)
  eventoMapsLink: 'https://share.google/D70I1DCpZGlVN9pWS', // ← ALTERE AQUI

  // Hora para mensagem pós-evento (em horas, formato 24h)
  horaMensagemPosEvento: 21,

  // Número WhatsApp do organizador (com DDI, sem + e sem espaços)
  // Usado como fallback para mensagens manuais
  organizadorWhatsApp: '5561983156915', // ← ALTERE AQUI (DDI+DDD+número)
};

// =========================================
//  INICIALIZAÇÃO
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  preencherDetalhes();
  iniciarContagem();
  configurarMascaraWhatsApp();
  verificarMensagemPosEvento();
  configurarContadores();
});

// =========================================
//  PREENCHE DETALHES DO EVENTO NA PÁGINA
// =========================================
function preencherDetalhes() {
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('event-date-display', CONFIG.eventoDataTexto);
  setTxt('event-time-display', CONFIG.eventoHoraTexto);
  setTxt('event-place-display', CONFIG.eventoLocal);

  // Links do Maps
  ['maps-link', 'maps-link-success'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = CONFIG.eventoMapsLink;
  });

  // Detalhes na tela de sucesso
  const sd = document.getElementById('s-date');
  const st = document.getElementById('s-time');
  const sp = document.getElementById('s-place');
  if (sd) sd.textContent = CONFIG.eventoDataTexto;
  if (st) st.textContent = CONFIG.eventoHoraTexto;
  if (sp) sp.textContent = `${CONFIG.eventoLocal} — ${CONFIG.eventoEndereco}`;
}

// =========================================
//  CONTADOR REGRESSIVO
// =========================================
function iniciarContagem() {
  const alvo = new Date(CONFIG.eventoDataHora).getTime();

  function atualizar() {
    const agora = Date.now();
    const diff  = alvo - agora;

    if (diff <= 0) {
      document.getElementById('countdown').classList.add('hidden');
      document.getElementById('event-passed-msg').classList.remove('hidden');
      return;
    }

    const dias  = Math.floor(diff / 86400000);
    const horas = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000)  / 60000);
    const segs  = Math.floor((diff % 60000)    / 1000);

    document.getElementById('cd-days').textContent  = String(dias).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(horas).padStart(2, '0');
    document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent  = String(segs).padStart(2, '0');
  }

  atualizar();
  setInterval(atualizar, 1000);
}

// =========================================
//  BOTÕES + e − dos contadores
// =========================================
function configurarContadores() {
  document.querySelectorAll('.counter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const action   = btn.dataset.action;
      const input    = document.getElementById(targetId);
      let val = parseInt(input.value) || 0;

      if (action === 'plus')  val = Math.min(val + 1, 20);
      if (action === 'minus') val = Math.max(val - 1, 0);

      input.value = val;
    });
  });
}

// =========================================
//  MÁSCARA WHATSAPP
// =========================================
function configurarMascaraWhatsApp() {
  const input = document.getElementById('whatsapp');
  input.addEventListener('input', () => {
    let v = input.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 7) {
      v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    } else if (v.length > 2) {
      v = `(${v.slice(0,2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      v = `(${v}`;
    }
    input.value = v;
  });
}

// =========================================
//  VALIDAÇÃO
// =========================================
function validar() {
  const nome     = document.getElementById('nome').value.trim();
  const adultos  = parseInt(document.getElementById('adultos').value) || 0;
  const criancas = parseInt(document.getElementById('criancas').value) || 0;
  const whatsapp = document.getElementById('whatsapp').value.replace(/\D/g, '');

  limparErros();

  if (!nome) {
    mostrarErro('Por favor, informe o nome do responsável. 👤');
    document.getElementById('nome').classList.add('error');
    return false;
  }

  if (adultos === 0 && criancas === 0) {
    mostrarErro('Informe ao menos 1 adulto ou 1 criança. 👨‍👩‍👧');
    return false;
  }

  if (whatsapp.length < 10 || whatsapp.length > 11) {
    mostrarErro('WhatsApp inválido. Use o formato (11) 99999-9999. 📱');
    document.getElementById('whatsapp').classList.add('error');
    return false;
  }

  return true;
}

function mostrarErro(msg) {
  const el = document.getElementById('form-error');
  el.textContent = msg;
  el.classList.remove('hidden');
}
function limparErros() {
  document.getElementById('form-error').classList.add('hidden');
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}

// =========================================
//  CONFIRMAR PRESENÇA (função principal)
// =========================================
async function confirmarPresenca() {
  if (!validar()) return;

  const btn    = document.getElementById('confirm-btn');
  const loader = document.getElementById('btn-loader');
  const nome   = document.getElementById('nome').value.trim();
  const adultos  = parseInt(document.getElementById('adultos').value) || 0;
  const criancas = parseInt(document.getElementById('criancas').value) || 0;
  const whatsappRaw = document.getElementById('whatsapp').value.replace(/\D/g, '');

  // Número com DDI Brasil
  const whatsappCompleto = '55' + whatsappRaw;

  btn.disabled = true;
  btn.querySelector('.btn-text').textContent = 'Salvando...';
  loader.classList.remove('hidden');

  try {
    // ── Salva no Firestore ──
    await convidadosRef.add({
      nome,
      adultos,
      criancas,
      whatsapp: whatsappRaw,
      whatsappCompleto,
      confirmadoEm: firebase.firestore.FieldValue.serverTimestamp(),
      eventoData: CONFIG.eventoDataTexto,
      eventoHora: CONFIG.eventoHoraTexto,
      eventoLocal: CONFIG.eventoLocal,
      msgPosEvento: false, // flag para saber se recebeu a mensagem de gratidão pós-evento
    });

    // ── Confetes! ──
    dispararConfetes();

    // ── Mostra tela de sucesso ──
    document.getElementById('form-wrapper').classList.add('hidden');
    const successScreen = document.getElementById('success-screen');
    successScreen.classList.remove('hidden');

    const firstName = nome.split(' ')[0];
    document.getElementById('success-msg').textContent =
      `Oba, ${firstName}! A Patrulha Canina já sabe que você vem! 🐾 ` +
      `Anota aí as informações da festa:`;

    // ── Rola até o sucesso ──
    successScreen.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // ── Abre WhatsApp de confirmação ──
    setTimeout(() => {
      abrirWhatsAppConfirmacao(whatsappCompleto, firstName, adultos, criancas);
    }, 2000);

  } catch (err) {
    console.error('Erro ao salvar:', err);
    mostrarErro('Ops! Erro ao confirmar. Verifique a conexão e tente novamente. 😕');
    btn.disabled = false;
    btn.querySelector('.btn-text').textContent = 'Confirmar Presença!';
    loader.classList.add('hidden');
  }
}

// =========================================
//  WHATSAPP — MENSAGEM DE CONFIRMAÇÃO
// =========================================
function abrirWhatsAppConfirmacao(numero, firstName, adultos, criancas) {
  const total = adultos + criancas;
  const msg = encodeURIComponent(
    `🐾 *Presença Confirmada!* 🐾\n\n` +
    `Olá, *${firstName}*! Que alegria! 🎉\n\n` +
    `Sua presença foi confirmada no aniversário do *Miguel*! 🎈\n\n` +
    `*📋 Resumo da sua confirmação:*\n` +
    `👤 Responsável: ${firstName}\n` +
    `🧑 Adultos: ${adultos}\n` +
    `👧 Crianças: ${criancas}\n` +
    `👥 Total: ${total} pessoa(s)\n\n` +
    `*📅 Data:* ${CONFIG.eventoDataTexto}\n` +
    `*⏰ Horário:* ${CONFIG.eventoHoraTexto}\n` +
    `*📍 Local:* ${CONFIG.eventoLocal}\n` +
    `${CONFIG.eventoEndereco}\n\n` +
    `*🗺️ Como chegar:*\n${CONFIG.eventoMapsLink}\n\n` +
    `Mal podemos esperar para te ver lá! 🐕💙\n\n` +
    `_Com carinho, família do Miguel_ 🐾`
  );

  window.open(`https://wa.me/${numero}?text=${msg}`, '_blank');
}

// =========================================
//  MENSAGEM PÓS-EVENTO (verificação client-side)
//  Para automação completa, use Firebase Functions
// =========================================
function verificarMensagemPosEvento() {
  const eventoDate = new Date(CONFIG.eventoDataHora);
  const agora = new Date();

  // Se o dia do evento E já passou das 21h
  const mesmoDia =
    agora.getDate()     === eventoDate.getDate() &&
    agora.getMonth()    === eventoDate.getMonth() &&
    agora.getFullYear() === eventoDate.getFullYear();

  if (mesmoDia && agora.getHours() >= CONFIG.horaMensagemPosEvento) {
    mostrarBannerPosEvento();
  }
}

function mostrarBannerPosEvento() {
  const banner = document.createElement('div');
  banner.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
    background: linear-gradient(135deg, #1565C0, #0D47A1);
    color: white; text-align: center; padding: 16px 20px;
    font-family: 'Fredoka One', cursive; font-size: 18px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  `;
  banner.innerHTML = `
    🎉 O evento aconteceu! Obrigado por fazer parte dessa festa incrível! 🐾💙
    <button onclick="this.parentElement.remove()" style="
      margin-left: 12px; background: rgba(255,255,255,0.2);
      border: none; color: white; padding: 4px 12px;
      border-radius: 50px; cursor: pointer; font-size: 14px;
    ">✕</button>
  `;
  document.body.prepend(banner);
}

// =========================================
//  CONFETES 🎉
// =========================================
function dispararConfetes() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ['#1565C0','#D32F2F','#F9A825','#FFD54F','#42A5F5','#FFFFFF','#EF5350'];
  const PIECES = [];
  const N = 160;

  for (let i = 0; i < N; i++) {
    PIECES.push({
      x:   Math.random() * canvas.width,
      y:   -20 - Math.random() * canvas.height * 0.5,
      w:   6 + Math.random() * 10,
      h:   10 + Math.random() * 16,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: 2 + Math.random() * 5,
      angle: Math.random() * Math.PI * 2,
      spin:  (Math.random() - 0.5) * 0.15,
      drift: (Math.random() - 0.5) * 2,
      opacity: 1,
    });
  }

  let frame;
  let elapsed = 0;
  const DURATION = 4500;

  function draw(ts) {
    if (!elapsed) elapsed = ts;
    const progress = (ts - elapsed) / DURATION;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    PIECES.forEach(p => {
      p.y     += p.speed;
      p.x     += p.drift;
      p.angle += p.spin;
      p.opacity = Math.max(0, 1 - Math.max(0, progress - 0.7) / 0.3);

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (progress < 1) {
      frame = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(draw);

  // Dispara uma segunda onda de confetes
  setTimeout(() => {
    elapsed = 0;
    PIECES.forEach(p => {
      p.y = -20 - Math.random() * 200;
      p.x = Math.random() * canvas.width;
      p.opacity = 1;
    });
  }, 1800);
}
