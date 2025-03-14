const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

// CRUD para Alunos
app.get('/alunos', async (req, res) => {
  const alunos = await prisma.aluno.findMany({
    include: {
      boletins: true, // Incluir boletins relacionados
    },
  });
  res.json(alunos);
});

app.post('/alunos', async (req, res) => {
  const { nome, idade, endereco } = req.body;
  const aluno = await prisma.aluno.create({
    data: {
      nome,
      idade,
      endereco,
    },
  });
  res.json(aluno);
});

app.put('/alunos/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, idade, endereco } = req.body;
  const aluno = await prisma.aluno.update({
    where: { id: Number(id) },
    data: { nome, idade, endereco },
  });
  res.json(aluno);
});

app.delete('/alunos/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.aluno.delete({
    where: { id: Number(id) },
  });
  res.status(204).send();
});

// CRUD para Professores
app.get('/professores', async (req, res) => {
  const professores = await prisma.professor.findMany();
  res.json(professores);
});

app.post('/professores', async (req, res) => {
  const { nome, materia } = req.body;
  const professor = await prisma.professor.create({
    data: { nome, materia },
  });
  res.json(professor);
});

app.put('/professores/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, materia } = req.body;
  const professor = await prisma.professor.update({
    where: { id: Number(id) },
    data: { nome, materia },
  });
  res.json(professor);
});

app.delete('/professores/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.professor.delete({
    where: { id: Number(id) },
  });
  res.status(204).send();
});

// CRUD para Boletins
app.post('/boletins', async (req, res) => {
  const { alunoId, disciplina, nota } = req.body;
  const boletim = await prisma.boletim.create({
    data: { alunoId, disciplina, nota },
  });
  res.json(boletim);
});

app.put('/boletins/:id', async (req, res) => {
  const { id } = req.params;
  const { alunoId, disciplina, nota } = req.body;
  const boletim = await prisma.boletim.update({
    where: { id: Number(id) },
    data: { alunoId, disciplina, nota },
  });
  res.json(boletim);
});

app.delete('/boletins/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.boletim.delete({
    where: { id: Number(id) },
  });
  res.status(204).send();
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
