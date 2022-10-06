import styled from "styled-components";

export const Container = styled.div`
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: #F4F5FC;
    box-shadow: 0 0px 2px 0;

    > svg {
        position: fixed;
        left: 0;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        color: #454D56;
        cursor: pointer;
    }
`;

export const ContainerInstituicao = styled.div`
    color: #454D56;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
