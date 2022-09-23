import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    color: #418EE2;
    font-weight: bold;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 0 px;

    > svg {
        margin: 0 20px;
        color: #418EE2;
        height: 32px;
        width: 32px;
    }

    &:hover {
        margin: 5px;
        background-color: black;
    }
`;