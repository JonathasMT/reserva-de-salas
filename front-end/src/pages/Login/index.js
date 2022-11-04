import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../components/Header';

function Home() {
    const apiUrl = "http://localhost:3001";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
      setEmail(event.target.value)
    };
    const handlePassword = (event) => {
      setPassword(event.target.value)
    };

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        console.log("Você já esta logado!");
      }else {
        console.log('Faça LOGIN!')
      }
    }, []);

    const submitLogin = async (event) => {
      event.preventDefault();
      const loginData = {email:email,password:password};
      await axios.post(apiUrl+'/auth/login', loginData)
      .then((result) => {
        alert(result.data.msg);
        localStorage.setItem('token', JSON.stringify(result.data.token));
      }).catch((error) => {
        console.log(error);
        alert(error.response.data.msg);
      });
    };

    return(
    <div>
        <Header/>
        <h1>LOGIN</h1>
        <form onSubmit={submitLogin}>
        <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(event) => handleEmail(event)}
        />
        <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={(event) => handlePassword(event)}
        />
        <button type="submit">Entrar</button>
        </form>
    </div>
    )
}

export default Home