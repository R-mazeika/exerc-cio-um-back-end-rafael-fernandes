// hello.js

const os = require("os");

// Mensagem de boas-vindas personalizada
console.log("Olá! Bem-vindo ao Node.js 🚀");

// Versão do Node.js instalada
console.log("Versão do Node.js:", process.version);

// Sistema operacional que está rodando
console.log("Sistema Operacional:", os.type(), "-", os.platform());

// Caminho da pasta atual
console.log("Diretório atual:", process.cwd());
