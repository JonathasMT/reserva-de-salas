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
    display: flex;
    flex-direction:row;
    border-left: 1px solid ${Theme.borderCalendario};
    border-right: 1px solid ${Theme.borderCalendario};
`;

export const ContainerDia = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
    position:relative;
    background-color: ${Theme.fundoCalendarioBloco};
    border: 1px solid ${Theme.borderCalendario};
    padding: 30px 10px;
    gap: 5px;
    cursor: pointer;
`;

export const Dia = styled.div`
    box-sizing: border-box;
    float: right;
    color: ${Theme.secundaria};
    font-weight: bold;
    font-size: 0.8rem;
    top: 0;
    right: 0;
    position:absolute;
    margin: 10px;
`;

export const DiaCorrente = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    position:absolute;
    margin: 5px;
    color: ${Theme.fundoCalendarioBloco};
    background-color: ${Theme.secundaria};
    border: 0.5px solid ${Theme.secundaria};
    border-radius: 50%;
    /* margin: -1px 1px 1px 1px ; */
    font-size: 0.8rem;
    font-weight: bold;
`;
