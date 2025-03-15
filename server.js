import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// Configuração para rodar no mesmo servidor
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: "*" }));
app.use(express.json());

// Servir arquivos do frontend React
app.use(express.static(path.join(__dirname, "client", "build")));

// CRUD Alunos
app.get("/alunos", async (req, res) => {
  const alunos = await prisma.aluno.findMany();
  res.json(alunos);
});

app.post("/alunos", async (req, res) => {
  const { nome, idade, curso } = req.body;
  const aluno = await prisma.aluno.create({ data: { nome, idade, curso } });
  res.json(aluno);
});

app.delete("/alunos/:id", async (req, res) => {
  await prisma.aluno.delete({ where: { id: Number(req.params.id) } });
  res.send("Aluno excluído!");
});

// Qualquer outra rota que não seja API serve o React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
