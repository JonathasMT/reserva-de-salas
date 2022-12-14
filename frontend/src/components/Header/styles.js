import styled from "styled-components";

import Color from "../../assets/styles/colors";

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    background-color: ${Color.fundoGeral};
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);
    gap: 30px;
    user-select: none;
    z-index: 51;

    > svg {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        color: ${Color.primaria};
        cursor: pointer;
    }
    a {
        text-decoration: none;
        height: 100%;
    }
`;

export const ContainerInstituicao = styled.div`
    width: auto;
    height: 100%;
    color: ${Color.primaria};
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
    color: ${Color.primaria};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Titulo = styled.div`
    font-size: 20px;
    font-weight: 600;
`;

export const SubTitulo = styled.div`
    font-size: 15px;
`;
