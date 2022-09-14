import styled from "styled-components";

export const Container = styled.div`
    height: 70px;
    display: flex;
    background-color: #F4F5FC;
    box-shadow: 0 0 4px 0;
    align-items: center;

    > svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        color: #454D56;
        cursor: pointer;
    }

    > texto {
        justify-content: center;
    }
`;
