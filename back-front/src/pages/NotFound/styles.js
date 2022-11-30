import styled from 'styled-components';

import {Theme} from '../../components/Theme'

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.fundoSecundario};
    padding-top: 50px;
`;

export const Button = styled.button`
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    background-color: ${Theme.acentuada};
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;


