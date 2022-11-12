import styled from 'styled-components';

import { Theme } from '../../components/Theme'

export const Container = styled.div`
height: calc(100vh - 50px);
box-sizing: border-box;
padding-top: 10px;
gap: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: ${Theme.menuFundo};

> h1 {
    padding: 0;
    margin: 0;
}
`;

export const Button = styled.button`
width: 300px;
height: 50px;
box-sizing: border-box;
border: none;
border-radius: 7px;
padding: 5px;
background-color: ${Theme.textoAccent};
color: white;
font-size: 20px;
font-weight: bold;
cursor: pointer;
`;


