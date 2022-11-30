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

export const ContainerSemana = styled.div`
    width: 100%;
    height: calc(100vw / 17);
    min-height: 107px;
    box-sizing: border-box;
    display: flex;
    flex-direction:row;
    border-left: 1px solid ${Theme.borderCalendario};
    border-right: 1px solid ${Theme.borderCalendario};
`;

export const ContainerDia = styled.div`
    width: calc(100% / 7);
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
    position: relative;
    background-color: ${Theme.fundoCalendarioBloco};
    border: 1px solid ${Theme.borderCalendario};
    padding: 20px 7px;
    gap: 3px;
    cursor: pointer;
`;

export const Dia = styled.div`
    top: 0;
    right: 0;
    position:absolute;
    margin: 5px;
    //fonte
    font-size: 0.7rem;
    font-weight: bold;
    color: ${Theme.secundaria};




`;

export const DiaCorrente = styled.div`
    //circulo
    width: 0.9rem;
    height: 0.9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position:absolute;
    top: 0;
    right: 0;
    background-color: ${Theme.secundaria};
    border-radius: 50%;
    margin: 3px;
    padding: 2px;
    //fonte
    font-size: 0.7rem;
    font-weight: bold;
    color: ${Theme.fundoCalendarioBloco};
`;
