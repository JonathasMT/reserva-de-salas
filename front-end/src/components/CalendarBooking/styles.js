import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 100%;
height: 20px;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
background-color: ${Theme.aula};
border-radius: 5px;
padding-top: 1px;
padding-left: 5px;
padding-right: 5px;
`;

export const Time = styled.div`
width: 20%;
height: 100%;
font-size: 8px;
font-weight: bold;
color: ${Theme.textPrimary}
`;

export const Title = styled.div`
width: 80%;
height: 100%;
font-size: 8px;
color: ${Theme.background}
`;