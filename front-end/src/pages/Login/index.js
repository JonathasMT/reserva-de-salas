import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../components/Header';

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
      const token = localStorage.getItem('token');
      if (token) {
        console.log("Você já esta logado!");
      }else {
        console.log('Faça LOGIN!')
      }
    }, []);

    const submeterLogin = async (evento) => {
      evento.preventDefault();
      const loginData = {email:email,senha:senha};
      await axios.post(apiUrl+'/login', loginData)
      .then((resultado) => {
        alert(resultado.data.msg);
        localStorage.setItem('token', JSON.stringify(resultado.data.token));
      }).catch((erro) => {
        console.log(erro);
        alert(erro.response.data.msg);
      });
    };

    return(
    <div>
        <Header/>
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
    </div>
    )
}

export default Home