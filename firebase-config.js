// =========================================
//  firebase-config.js
//  🔧 EDITE ESTE ARQUIVO COM SUAS CREDENCIAIS
// =========================================
//
//  COMO OBTER:
//  1. Acesse https://console.firebase.google.com
//  2. Crie um projeto (ex: "miguel-aniversario")
//  3. Vá em ⚙️ Configurações do projeto > Seus apps
//  4. Clique em </> (Web) e registre o app
//  5. Copie o firebaseConfig e cole abaixo
//
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyBZ3h975jXjad84v-agXlfttnNPrq119GM",
  authDomain: "miguel-aniversario.firebaseapp.com",
  projectId: "miguel-aniversario",
  storageBucket: "miguel-aniversario.firebasestorage.app",
  messagingSenderId: "159454403486",
  appId: "1:159454403486:web:71c8aaf3cdee9d0e75548f",
  measurementId: "G-EREQLQZJ98"
};

// ── Inicializa Firebase ──
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ── Exporta referência da coleção de convidados ──
const convidadosRef = db.collection("convidados");
