import React from 'react';
import axios from 'axios';

function Home() {

    const user = {
        email: "joanatas@ufg.br",
        password: "1602"
    }


    function login() {
        return axios.post('http://localhost:3001/auth/login', {user})
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return(
        <div>
            <br />
            <h2>Faça Login</h2>
            <form onSubmit={login}>
                <input type="text" name="login" onChange={login} />
                <input type="password" name="password" />
                <input type="submit" name="acao" value="Logar" />
            </form>
        </div>
    )
}

export default Home