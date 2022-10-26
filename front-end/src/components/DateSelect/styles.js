import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: row;
background-color: red;
`;

export const SubContainer = styled.div`
width: auto;
height: 100%;
display: flex;
flex-direction: column;
margin-right: auto;
background-color: red;
`;

export const Selector = styled.div`
width: auto;
height: 50%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
font-weight: bold;
background-color: blue;

> svg {
        margin: 0 10px;
        height: 25px;
        width: 25px;
    }
`;
export const Date = styled.div`
width: auto;
height: 50%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-weight: bold;
background-color: green;
`;