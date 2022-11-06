import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: ${Theme.fundo};
    box-shadow: 2px 0px 8px 1px rgba(0, 0, 0, 0.2);
    gap: 30px;
    user-select: none;

    > svg {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        color: ${Theme.textoPrimary};
        cursor: pointer;
    }
`;

export const ContainerInstituicao = styled.div`
    width: auto;
    height: 100%;
    color: ${Theme.textoPrimary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > img {
        width: auto;
        max-height: 95%;
    }
`;
export const SubContainerInstituicao = styled.div`
    width: auto;
    height: 100%;
    color: ${Theme.textoPrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Titulo = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const SubTitulo = styled.div`
    font-size: 15px;
`;
