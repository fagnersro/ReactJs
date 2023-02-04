import { useParams } from 'react-router-dom';

function Produto() {
  const { id } = useParams();

  return (
    <div>
      <h1>DETALHE DO PRODUTO</h1>
      <span>MEU PRODUTO É: {id}</span>
    </div>
  );
}

export default Produto;
