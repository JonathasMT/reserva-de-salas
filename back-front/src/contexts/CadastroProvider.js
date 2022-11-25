import {createContext, useEffect, useState} from 'react';
import api from '../services/api'


export const CadastroContext = createContext({});

async function tamanhoBd() {
    var retorno;
    await api.get('/primeiroacesso')
    .then((resultado) => {
        console.log('MSG = ' + resultado.data.msg);
        console.log('VAZIO = ' + resultado.data.vazio);
        retorno = resultado.data.vazio;
    }).catch((erro) => {
        console.log('ERRO = ' + erro.response.data.msg);
        retorno = erro.response.data;
    });
    return retorno;
};

async function primeiroAcesso (instituicaoNome, logo, img, nome, email, senha, confirmaSenha) {
    var retorno;
    const dadosPrimeiroAcesso = {
        nomeInstituicao: instituicaoNome,
        logo: logo,
        imagem: img,
        nome: nome,
        email: email,
        senha: senha,
        confirmaSenha: confirmaSenha
    };
    await api.post('/primeiroacesso', dadosPrimeiroAcesso)
    .then((resultado) => {
        console.log('MSG = ' + resultado.data.msg);
        retorno = resultado.data;
    }).catch((erro) => {
        console.log('ERRO = ' + erro.response.data.msg);
        retorno = erro.response.data;
    });
    return retorno;
};

export const CadastroProvider = ({children}) => {
    return (
        <CadastroContext.Provider
        value={{
                tamanhoBd,
                primeiroAcesso
            }}
        >
        {children}
        </CadastroContext.Provider>
    );
};