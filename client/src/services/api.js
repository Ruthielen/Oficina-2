const API_URL = "http://localhost:5000";

export async function getAlunos() {
  const response = await fetch(`${API_URL}/api/alunos`);
  return response.json();
}
