import { useEffect, useState } from "react";

function Disciplinas() {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    fetch("/api/disciplinas")
      .then((response) => response.json())
      .then((data) => setDisciplinas(data))
      .catch((error) => console.error("Erro ao buscar disciplinas:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Disciplinas</h1>
      {disciplinas.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {disciplinas.map((disciplina) => (
            <li key={disciplina.id}>{disciplina.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Disciplinas;
