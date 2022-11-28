import styled from 'styled-components';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100%;
    min-height: 20px;
    max-height: ${props => {
        switch (props.tipo) {
        case 'day':
            return '95%'
        case 'week':
            return '95%'
        case 'month':
            return '85%'
        default:
            return '20px';
        }}
    };
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${props => {
        switch (props.cor) {
        case 1:
            return Theme.aula
        case 2:
            return Theme.reuniao
        case 3:
            return Theme.curso
        default:
            return Theme.outro;
        }}
    };
    gap: 5px;
    border-radius: 5px;
    padding-top: 1px;
    padding-left: 5px;
    padding-right: 5px;
`;

export const Hora = styled.div`
    width: auto;
    font-size: 8px;
    font-weight: bold;
    color: ${Theme.textoPrimary};
`;

export const Titulo = styled.div`
    width: auto;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 8px;
    color: ${Theme.fundo};
    text-overflow: ellipsis;
    overflow: hidden;
`;