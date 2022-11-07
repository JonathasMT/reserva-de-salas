import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 100%;
height: 20px;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
background-color: ${Theme.aula};
border-radius: 5px;
padding-top: 1px;
padding-left: 5px;
padding-right: 5px;
`;

export const Hora = styled.div`
width: 20%;
height: auto;
font-size: 8px;
font-weight: bold;
color: ${Theme.textoPrimary};
text-overflow: ellipsis;
overflow: hidden;
`;

export const Titulo = styled.div`
width: 80%;
height: 100%;
align-items: flex-end;
justify-content: flex-end;
font-size: 8px;
color: ${Theme.fundo};
text-overflow: ellipsis;
overflow: hidden;
`;