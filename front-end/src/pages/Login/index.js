import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import {Container} from './styles';

function Home() {
    const apiUrl = "http://localhost:3001";
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEmail = (evento) => {
      setEmail(evento.target.value)
    };
    const handleSenha = (evento) => {
      setSenha(evento.target.value)
    };

    useEffect(() => {
      const token = localStorage.getItem('usuarioLogado');
      if (token) {
        console.log("Você já esta logado!");
        console.log(token)
      }else {
        console.log('Faça LOGIN!')
      }
    }, []);

    const submeterLogin = async (evento) => {
      evento.preventDefault();
      const loginData = {email:email,senha:senha};
      await axios.post(apiUrl+'/login', loginData)
      .then((resultado) => {
        const token = resultado.data.token;
        const usuarioId = resultado.data.usuarioId;
        alert(resultado.data.msg);
        localStorage.setItem('usuarioLogado', JSON.stringify({token:token, usuarioId:usuarioId}));
      }).catch((erro) => {
        console.log(erro);
        alert(erro.response.data.msg);
      });
    };

    return(
      <div>
        <Header/>
        <Container>
          <h1>LOGIN</h1>
          <form onSubmit={submeterLogin}>
            <input
                type="email"
                name="email"
                placeholder="Digite o seu e-mail"
                onChange={(evento) => handleEmail(evento)}
            />
            <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                onChange={(evento) => handleSenha(evento)}
            />
            <button type="submit">Entrar</button>
          </form>
        </Container>
      </div>
    )
}

export default Home