import { useEffect, useState } from "react";

function Professores() {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    fetch("/api/professores")
      .then((response) => response.json())
      .then((data) => setProfessores(data))
      .catch((error) => console.error("Erro ao buscar professores:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Professores</h1>
      {professores.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {professores.map((professor) => (
            <li key={professor.id}>{professor.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Professores;
