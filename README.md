# 🐾 Miguel 4 Anos — Site de Confirmação de Presença

Site temático Patrulha Canina com RSVP + Firebase + GitHub Pages.

---

## 📁 Estrutura de Arquivos

```
miguel-aniversario/
├── index.html         → Página principal (convidados veem isso)
├── style.css          → Visual Patrulha Canina
├── script.js          → Lógica, contagem, confetes, WhatsApp
├── firebase-config.js → Suas credenciais do Firebase (⚠️ editar)
├── admin.html         → Painel só seu (ver convidados, enviar msg)
└── assets/
    └── banner.png     → Coloque aqui seu banner (se tiver)
```

---

## ✏️ PASSO 1 — Configure o Evento

Abra o arquivo **`script.js`** e edite o bloco `CONFIG` no topo:

```js
const CONFIG = {
  eventoDataHora:   '2025-12-07T15:00:00',        // Data/hora do evento
  eventoDataTexto:  '07 de Dezembro de 2025',      // Exibição bonita da data
  eventoHoraTexto:  '15h00',                       // Exibição bonita da hora
  eventoLocal:      'Nome do Salão de Festas',     // Nome do local
  eventoEndereco:   'Rua X, 123 — Bairro, Cidade', // Endereço por extenso
  eventoMapsLink:   'https://maps.google.com/?q=', // Link do Google Maps
  horaMensagemPosEvento: 21,                       // Hora do banner pós-evento
  organizadorWhatsApp: '5511999999999',            // Seu WhatsApp (DDI+DDD+número)
};
```

---

## 🔥 PASSO 2 — Configure o Firebase (Banco de Dados)

### 2.1 Criar projeto no Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Clique em **"Adicionar projeto"**
3. Nome sugerido: `miguel-aniversario`
4. Pode desativar Google Analytics (opcional)

### 2.2 Criar o Firestore

1. No menu lateral → **Firestore Database**
2. Clique em **"Criar banco de dados"**
3. Escolha **"Modo de teste"** (permite leitura/escrita por 30 dias)
4. Selecione a região mais próxima (ex: `southamerica-east1`)

### 2.3 Obter credenciais

1. Clique em ⚙️ **Configurações do projeto**
2. Role até **"Seus apps"** → Clique em **</>** (Web)
3. Dê um nome (ex: `miguel-site`) → **Registrar app**
4. Copie o bloco `firebaseConfig`

### 2.4 Colar as credenciais

Abra **`firebase-config.js`** e substitua os valores:

```js
const firebaseConfig = {
  apiKey:            "AIzaSy...",
  authDomain:        "miguel-aniversario.firebaseapp.com",
  projectId:         "miguel-aniversario",
  storageBucket:     "miguel-aniversario.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

### 2.5 Regras do Firestore

No console Firebase → Firestore → **Regras**, cole:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Convidados podem criar registros mas não ler os outros
    match /convidados/{doc} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

---

## 🖼️ PASSO 3 — Adicionar seu Banner (opcional)

Se você tiver um banner da Patrulha Canina:

1. Salve o arquivo como `assets/banner.png`
2. Abra `index.html` e localize o comentário:
   ```html
   <!-- Coloque seu banner aqui: substitua o bloco abaixo por... -->
   ```
3. Substitua o `<div class="hero-banner-placeholder">` por:
   ```html
   <img src="assets/banner.png" class="hero-banner" alt="Banner Patrulha Canina" />
   ```
4. Delete o bloco `<div class="hero-banner-placeholder">...</div>`

---

## 🚀 PASSO 4 — Publicar no GitHub Pages

### 4.1 Criar repositório

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"**
3. Nome sugerido: `miguel-aniversario`
4. Deixe **Público**
5. Clique em **"Create repository"**

### 4.2 Subir os arquivos

**Opção A — Interface web do GitHub (mais fácil):**
1. Na página do repositório → **"uploading an existing file"**
2. Arraste TODOS os arquivos (index.html, style.css, script.js, firebase-config.js, admin.html)
3. Clique em **"Commit changes"**

**Opção B — Git (terminal):**
```bash
git init
git add .
git commit -m "Site aniversário Miguel 🐾"
git remote add origin https://github.com/SEU-USUARIO/miguel-aniversario.git
git push -u origin main
```

### 4.3 Ativar GitHub Pages

1. No repositório → **Settings** → **Pages**
2. Em **Source** → selecione **"Deploy from a branch"**
3. Branch: **main** → Pasta: **/ (root)**
4. Clique em **Save**
5. Aguarde 2-3 minutos → seu site estará em:
   ```
   https://SEU-USUARIO.github.io/miguel-aniversario/
   ```

---

## 🔐 PASSO 5 — Proteger o Painel Admin

O arquivo `admin.html` é seu painel privado. Para protegê-lo:

**Opção simples:** Renomeie para algo difícil (ex: `admin-xk37.html`)

**Opção Firebase Auth (recomendado):** Adicione login simples (consulte a documentação do Firebase Authentication).

---

## 📊 Como ver os convidados confirmados

Acesse: `https://SEU-USUARIO.github.io/miguel-aniversario/admin.html`

No painel você verá:
- Total de grupos, adultos e crianças
- Lista completa com data/hora de confirmação
- Botão para enviar mensagem WhatsApp pós-evento
- Exportação dos números

---

## 📱 Como funciona o WhatsApp

**Ao confirmar presença:**
→ O site abre automaticamente o WhatsApp do convidado com mensagem de agradecimento + detalhes do evento + link do Maps.

**No dia do evento (após 21h):**
→ No `admin.html`, clique em **"Enviar para todos"** — o site abre o WhatsApp um a um com a mensagem de agradecimento por ter ido.

> ⚠️ O WhatsApp precisa estar instalado no celular do convidado.
> Para envio automático (sem precisar abrir um a um), seria necessário a API oficial do WhatsApp Business.

---

## 🎨 Personalizações Rápidas

| O que mudar | Onde |
|---|---|
| Cores principais | `style.css` → bloco `:root` |
| Nome do filho | `index.html` → `.miguel-name` |
| Idade | `index.html` → `.age-num` |
| Texto da mensagem WhatsApp | `script.js` → função `abrirWhatsAppConfirmacao()` |
| Mensagem pós-evento | `admin.html` → `#template-pos-evento` |
| Quantidade de confetes | `script.js` → `const N = 160` |

---

## ❓ Problemas Frequentes

**"O site carrega mas não salva no banco"**
→ Verifique as credenciais em `firebase-config.js` e as regras do Firestore.

**"O WhatsApp não abre"**
→ Verifique se o número foi digitado com DDD. Em desktop, o WhatsApp Web precisa estar logado.

**"O site não aparece no GitHub Pages"**
→ Aguarde até 5 minutos. Verifique se a branch é `main` nas configurações do Pages.

---

Feito com 💙 para o aniversário do Miguel! 🐾
