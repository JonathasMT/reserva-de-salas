import styled from 'styled-components';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    user-select: none;
`;

export const Body = styled.div`
    width: 100%;
    height: 565px;
    box-sizing: border-box;
    display: block;
    background-color: ${Theme.calendarioFundo};
    border: 1px solid ${Theme.border};
    padding: 10px;
    cursor: pointer;
`;

export const Dia = styled.div`
    box-sizing: border-box;
    float: right;
    color: ${Theme.textoSecondary};
    font-weight: bold;
    font-size: 1.5rem;
`;

export const DiaCorrente = styled.div`
    width: 0.9rem;
    height: 0.9rem;
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    color: ${Theme.calendarioFundo};
    background-color: ${Theme.textoSecondary};
    border: 0.5px solid ${Theme.textoSecondary};
    border-radius: 50%;
    padding: 1px;
    font-size: 0.6rem;
    font-weight: bold;
`;
