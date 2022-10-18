import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.background};
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    > svg {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        position: absolute;
        left: 0;
        color: ${Theme.textPrimary};
        cursor: pointer;
    }
`;

export const ContainerInstituicao = styled.div`
    height: 100%;
    color: ${Theme.textPrimary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    > h1, p{
        margin: 0;
        text-align: center;
    }
`;
