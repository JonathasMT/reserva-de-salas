import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
    width: 100%;
    height: 50px;
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
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Title = styled.div`
    margin: 0;
    font-size: 20px;
    font-weight: bold;
`;

export const Subtitle = styled.div`
    margin: 0;
    font-size: 15px;
`;
