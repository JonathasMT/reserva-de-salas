import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #F4F5FC;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

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
