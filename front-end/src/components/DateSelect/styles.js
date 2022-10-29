import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-start;
`;

export const SubContainer = styled.div`
width: auto;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
`;

export const Selector = styled.div`
width: auto;
height: 50%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-left: -7px;
margin-right: -7px;
color: ${Theme.textPrimary};

> svg {
    height: 25px;
    width: 25px;
    cursor: pointer;
    }
`;

export const Current = styled.div`
font-weight: bold;
font-size: 20px;
margin-left: 18px;
margin-right: 18px;
cursor: pointer;
`;

export const DateTime = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: center;
margin-bottom: -3px;
font-weight: bold;
font-size: 16px;
color: ${Theme.textSecondary};
cursor: pointer;
`;