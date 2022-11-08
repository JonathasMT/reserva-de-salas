import styled from 'styled-components';

import { Theme } from '../../components/Theme'

export const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
box-sizing: border-box;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: ${Theme.menuFundo};
`;

export const SubContainer = styled.div`
height:100%;
display: flex;
box-sizing: border-box;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Form = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
border: 1px solid white;
border-radius: 10px;
padding: 20px;

`;

export const Input = styled.input`
width: 300px;
height: 30px;
box-sizing: border-box;
border: none;
border-radius: 7px;
padding: 10px;

`;

export const Button = styled.button`
width: 300px;
height: 40px;
box-sizing: border-box;
border: none;
border-radius: 7px;
padding: 5px;
background-color: ${Theme.textoAccent};
color: white;
font-size: 20px;
font-weight: bold;
`;


