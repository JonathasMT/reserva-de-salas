import styled from 'styled-components';

import { Theme } from '../Theme';

export const Container = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: right;
`;

export const SubContainer = styled.div`
    width: 230px;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${Theme.horaSeletor};
    border-radius: 25px;
`;

export const ContainerDia = styled.div`
    width: 33%;
    height: calc(100% - 4px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    cursor: pointer;
`;

export const Dia = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${Theme.textoSecondary};
`;

export const ContainerSemana = styled.div`
    width: 33%;
    height: calc(100% - 4px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    cursor: pointer;
`;

export const Semana = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${Theme.textoSecondary};
`;

export const ContainerMes = styled.div`
    width: 33%;
    height: calc(100% - 4px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 25px;
    border: 2px solid ${Theme.border};
    cursor: pointer;
`;

export const Mes = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${Theme.textoAccent};
`;