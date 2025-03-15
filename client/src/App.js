import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import Professores from "./pages/Professores";
import Disciplinas from "./pages/Disciplinas";
import "./styles.css";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/alunos">Alunos</Link></li>
            <li><Link to="/professores">Professores</Link></li>
            <li><Link to="/disciplinas">Disciplinas</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/professores" element={<Professores />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
