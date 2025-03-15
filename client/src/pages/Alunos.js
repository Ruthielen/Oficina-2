import { useEffect, useState } from "react";

function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    fetch("/api/alunos")
      .then((response) => response.json())
      .then((data) => setAlunos(data))
      .catch((error) => console.error("Erro ao buscar alunos:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      {alunos.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {alunos.map((aluno) => (
            <li key={aluno.id}>{aluno.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alunos;
