import styled from 'styled-components';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 5%;
    padding-right: 5%;
    user-select: none;
`;

export const CalendarioHeader = styled.div`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-top: 2px solid ${Theme.border};
    border-left: 2px solid ${Theme.border};
    border-right: 2px solid ${Theme.border};
    border-bottom: 1px solid ${Theme.border};
    background-color: ${Theme.calendarioHeaderFundo};
    border-radius: 10px 10px 0px 0px;
    align-items: center;
`;

export const CalendarioDiasSemana = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${Theme.textoSecondaryVariant};
`;

export const Body = styled.div`
    width: 100%;
    height: 565px;
    box-sizing: border-box;
    display: flex;
    flex-direction:row;
    border-left: 1px solid ${Theme.border};
    border-right: 1px solid ${Theme.border};
`;

export const ContainerDia = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: block;
    background-color: ${Theme.calendarioFundo};
    border: 1px solid ${Theme.border};
    padding: 10px 5px;
    cursor: pointer;
`;

export const Dia = styled.div`
    box-sizing: border-box;
    float: right;
    color: ${Theme.textoSecondary};
    font-weight: bold;
    font-size: 0.8rem;
    margin: 1px;
`;

export const DiaCorrente = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    box-sizing: border-box;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${Theme.calendarioFundo};
    background-color: ${Theme.textoSecondary};
    border: 0.5px solid ${Theme.textoSecondary};
    border-radius: 50%;
    margin: -1px 1px 1px 1px ;
    font-size: 0.8rem;
    font-weight: bold;
`;
