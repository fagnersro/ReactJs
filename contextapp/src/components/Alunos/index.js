import { useContext } from 'react';
import { UserContext } from '../../context/user';
import Nome from '../Nome';

function Alunos() {
  const { qtdAlunos } = useContext(UserContext);
  return (
    <div>
      <h2>Quantidade total de alunos : {qtdAlunos}</h2>
      <Nome />
    </div>
  );
}

export default Alunos;
