import {createContext, useEffect, useState} from 'react';
import api from '../services/api'


export const CadastroContext = createContext({});

async function tamanhoBd () {
    var retorno;
    await api.get('/tamanhobd')
    .then((resultado) => {
        retorno=resultado.data.vazio;
    }).catch((erro) => {
        console.log('ERRO >>'+erro)
        retorno=erro.response.data.msg;
    });
    return retorno;
};

async function primeiroAcesso (instituicaoNome, logo, img, nome, email, senha, confirmaSenha) {
    var retorno;
    const dadosPrimeiroAcesso = {
        nome_instituicao: instituicaoNome,
        logo: logo,
        imagem: img,
        nome: nome,
        email: email,
        senha: senha,
        confirma_senha: confirmaSenha
    };
    await api.post('/primeiroacesso', dadosPrimeiroAcesso)
    .then((resultado) => {
        console.log(resultado.data.msg);
        retorno=resultado.data.msg;
    }).catch((erro) => {
        console.log('ERRO >>'+erro)
        retorno=erro.response.data.msg;
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