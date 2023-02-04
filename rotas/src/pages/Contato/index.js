import { Link } from 'react-router-dom';

function Contato() {
  return (
    <div>
      <h1>Contatos</h1>
      <span>Contato da empresa (ddd) xxxx-xxxx</span>
      <br />
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Contato;
