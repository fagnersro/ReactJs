import { useState, useEffect } from 'react';
import { db, auth } from './firebaseConection';
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import './app.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);
  const [idPosts, setIdPosts] = useState([]);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, 'posts'), snapshot => {
        let listaPost = [];

        snapshot.forEach(doc => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(listaPost);
      });
    }

    loadPosts();
  }, []);

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, user => {
        if (user) {
          console.log(user);
          setUser(true);
          setUserDetail({
            uid: user.uid,
            email: user.email,
          });
        } else {
          setUser(false);
          setUserDetail({});
        }
      });
    }

    checkLogin();
  }, []);

  async function handleAdd() {
    // await setDoc(doc(db, 'fagnersro', 'cliente02'), {
    //   titulo: titulo,
    //   autor,
    // })
    //   .then(() => {
    //     console.log('Dados registrados no banco');
    //   })
    //   .catch(error => {
    //     console.log(`Error: ${error}`);
    //   });

    await addDoc(collection(db, 'posts'), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log('cadastrado com sucesso');
        setAutor('');
        setTitulo('');
      })
      .catch(error => {
        console.log('error ' + error);
      });
  }

  async function buscarPost() {
    // const postRef = doc(db, 'posts', 'wOJ6rwB4aCdmhyzS7yva');
    // await getDoc(postRef)
    //   .then(snapshot => {
    //     setAutor(snapshot.data().autor);
    //     setTitulo(snapshot.data().titulo);
    //   })
    //   .catch(() => {
    //     console.log('ERROR AO BUSCAR');
    //   });

    const postsRef = collection(db, 'posts');
    await getDocs(postsRef)
      .then(snapshot => {
        let lista = [];

        snapshot.forEach(doc => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(lista);
      })
      .catch(error => {
        console.log('DEU ALGUM ERRO AO BUSCAR');
      });
  }

  async function editarPost() {
    const docRef = doc(db, 'posts', idPosts);
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log('POST ATUALIZADO');
        setIdPosts('');
        setTitulo('');
        setAutor('');
      })
      .catch(() => {
        console.log('ERRO AO ATUALIZAR O POST');
      });
  }

  async function excluirPost(id) {
    const docRef = doc(db, 'posts', id);
    await deleteDoc(docRef)
      .then(() => {
        alert('POST DELETADO COM SUCESSO');
      })
      .catch(error => {
        console.log('OCORREU UM ERRO AO DELETAR ' + error);
      });
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        console.log('CADASTRADO COM SUCESSO');

        setEmail('');
        setSenha('');
      })
      .catch(error => {
        if (error.code === 'auth/weak-password') {
          alert('Senha muito fraca');
        } else if (error.code === 'auth/email-already-in-use') {
          alert('Email já existe!');
        }
        console.log('ERRO AO CADASTRAR ' + error);
      });
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
      .then(value => {
        console.log('USER LOGADO COM SUCESSO');
        console.log(value.user);

        setUserDetail({
          uid: value.user.uid,
          email: value.user.email,
        });
        setUser(true);

        setEmail('');
        setSenha('');
      })
      .catch(() => {
        console.log('ERRO AO FAZER O LOGIN');
      });
  }

  async function fazerLogout() {
    await signOut(auth);
    setUser(false);
    setUserDetail({});
  }

  return (
    <div className="App">
      <h1>REACTJS AND FIRIBASE</h1>

      {user && (
        <div>
          <strong>Seja bem-vindo(a) (Você está logado!)</strong> <br />
          <span>
            ID: {userDetail.uid} - Email: {userDetail.email}
          </span>
          <br />
          <button onClick={fazerLogout}>Sair da conta</button>
          <br />
          <br />
        </div>
      )}

      <div className="container">
        <h2>Usuários</h2>
        <label>Email</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite um email"
        />
        <br />

        <label>Senha</label>
        <input
          value={senha}
          onChange={e => setSenha(e.target.value)}
          placeholder="Informe sua senha"
        />
        <br />

        <button onClick={novoUsuario}>Cadastrar</button>
        <br />
        <button onClick={logarUsuario}>Fazer login</button>
      </div>
      <br />
      <hr />

      <div className="container">
        <h2>POSTS</h2>
        <label>ID do Post</label>
        <input
          placeholder="Digite o ID do post"
          value={idPosts}
          onChange={e => setIdPosts(e.target.value)}
        />
        <br />

        <label>Titulo</label>
        <textarea
          type="text"
          placeholder="Digite o titulo"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={e => setAutor(e.target.value)}
        />
        <br />

        <button onClick={handleAdd}>Cadastrar</button>
        <br />
        <button onClick={buscarPost}>Buscar post</button>
        <br />
        <button onClick={editarPost}>Atualizar post</button>

        <ul>
          {posts.map(post => {
            return (
              <li className="li-post" key={post.id}>
                <strong>ID: {post.id}</strong> <br />
                <span>Titulo: {post.titulo}</span>
                <br />
                <span>Autor: {post.autor}</span> <br />
                <button onClick={() => excluirPost(post.id)}>Excluir</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
