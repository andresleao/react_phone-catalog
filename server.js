import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

// 👇 Esses dois definem __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Configuração CORS para desenvolvimento

// Rota específica para products.json
app.get('/api/products.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'static', 'products.json'));
});

// Função para listar diretórios
const listarDiretorios = caminho => {
  try {
    return fs.readdirSync(caminho).filter(arquivo =>
      fs.statSync(path.join(caminho, arquivo)).isDirectory()
    );
  } catch (err) {
    console.error('Erro ao listar diretórios:', err);
    return [];
  }
};

// Rota dinâmica
app.get('/api/diretorios/:type/:productName', (req, res) => {
  const { type, productName } = req.params;
  const productPath = path.join(__dirname, 'public', 'img', type, productName);

  try {
    const directories = fs.readdirSync(productPath).filter(file => fs.statSync(path.join(productPath, file)).isDirectory());
    res.json(directories);
  } catch (err) {
    console.error('Erro ao listar diretórios:', err);
    res.status(500).json({ error: 'Erro ao listar diretórios' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
