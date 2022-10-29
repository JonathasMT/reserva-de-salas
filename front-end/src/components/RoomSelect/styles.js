import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: center;
`;

export const SubContainer = styled.div`
width: auto;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
`;

export const Group = styled.div`
width: auto;
height: 50%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
font-weight: bold;
font-size: 20px;
color: ${Theme.textPrimary};
cursor: pointer;

> svg {
    height: 25px;
    width: 25px;
    padding-left: 5px;
    margin-bottom: -3px;
    cursor: pointer;
    }
`;

export const Room = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-around;
margin-bottom: -3px;
font-weight: bold;
font-size: 16px;
color: ${Theme.textSecondary};
cursor: pointer;

> svg {
    margin: 0 10px;
    height: 25px;
    width: 25px;
    }
`;