import { Link } from 'react-router-dom';
import './style.css';

function Erro() {
  return (
    <div>
      <h2>Ops, página não encontrada</h2>
      <span>Foram encontrada as seguintes páginas</span> <br />
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contatos</Link>
      </div>
    </div>
  );
}

export default Erro;
