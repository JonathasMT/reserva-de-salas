import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
`;

export const SubContainer = styled.div`
width: 150px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Group = styled.div`
width: auto;
height: 50%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
font-weight: bold;
font-size: 20px;
color: ${Theme.textPrimary};

> svg {
    height: 25px;
    width: 25px;
    padding-left: 5px;
    }
`;

export const Room = styled.div`
width: auto;
height: 50%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
font-weight: bold;
font-size: 16px;
color: ${Theme.textSecondary};

> svg {
    margin: 0 10px;
    height: 25px;
    width: 25px;
    }
`;