import styled from 'styled-components';

import Color from '../../assets/styles/colors';

export const Container = styled.div`
    width: 100%;
    min-height: 25px;
    height: ${props => {
        switch (props.tipo) {
        case 'day':
            return '80px'
        case 'week':
            return '40px'
        case 'month':
            return '20px'
        default:
            return '20px';
        }}
    };
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    background-color: ${props => {
        switch (props.cor) {
        case 1:
            return Color.aula
        case 2:
            return Color.reuniao
        case 3:
            return Color.curso
        default:
            return Color.outro;
        }}
    };
    gap: 5px;
    border-radius: 5px;
    padding-top: 1px;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 10;
`;

export const Hora = styled.div`
    width: auto;
    font-size: 9px;
    font-weight: 600;
    color: ${Color.primaria};
`;

export const Titulo = styled.div`
    width: auto;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 9px;
    color: ${Color.fundoGeral};
    letter-spacing: 0.3px;
    overflow: hidden;
    text-overflow: ellipsis;
`;