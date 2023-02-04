import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem vindo a página HOME</h1>
      <span>Fagnersrock dev</span> <br /> <br />
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contato">Contatos</Link>
      <hr />
      <Link to="/produto/123456">Produto 123456</Link>
    </div>
  );
}

export default Home;
