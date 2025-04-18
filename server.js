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

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

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

app.get('/api/product-model/:type', (req, res) => {
  const { type } = req.params;
  const modelPath = path.join(__dirname, 'public', 'img', type);

  try {
    const directories = fs.readdirSync(modelPath).filter(file => fs.statSync(path.join(modelPath, file)).isDirectory());
    res.json(directories);
  } catch (err) {
    console.error('Erro ao listar diretórios:', err);
    res.status(500).json({ error: 'Erro ao listar diretórios' });
  }
});

app.get('/api/product-images/:type/:model/:color', (req, res) => {
  const { type, model, color } = req.params;
  const dirPath = path.join(__dirname, 'public', 'img', type, model, color);

  try {
    const files = fs.readdirSync(dirPath).filter(file =>
      fs.statSync(path.join(dirPath, file)).isFile()
    );
    res.json(files);
  } catch (err) {
    console.error('Erro ao listar arquivos:', err);
    res.status(500).json({ error: 'Erro ao listar arquivos' });
  }
});

app.get('/api/product-colors/:type/:productName', (req, res) => {
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
