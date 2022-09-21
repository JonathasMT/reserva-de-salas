import styled from "styled-components";

export const Container = styled.div`
    height: 70px;
    display: inline-flex;
    flex-direction: row;
    width: 100vw;
    align-items: center;
    background-color: #F4F5FC;
    box-shadow: 0 0 4px 0;

    > svg {
        // position: fixed;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        color: #454D56;
        cursor: pointer;
    }
`;

export const ContainerInstituicao = styled.div`
    color: red;
`;
