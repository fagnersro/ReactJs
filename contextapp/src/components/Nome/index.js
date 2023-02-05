import { useContext } from 'react';
import { UserContext } from '../../context/user';

function Nome() {
  const { alunos, setAlunos } = useContext(UserContext);

  return (
    <div>
      <span style={{ color: '#FF0000' }}>Bem vindo: {alunos} </span>
      <br />
      <button onClick={() => setAlunos('Programação')}>Troca Nome</button>
    </div>
  );
}

export default Nome;
