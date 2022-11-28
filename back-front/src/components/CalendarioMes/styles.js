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
    border-left: 1px solid ${Theme.border};
    border-right: 1px solid ${Theme.border};
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
    background-color: ${Theme.calendarioFundo};
    border: 1px solid ${Theme.border};
    padding: 20px 7px;
    gap: 3px;
    cursor: pointer;
`;

export const Dia = styled.div`
    box-sizing: border-box;
    float: right;
    color: ${Theme.textoSecondary};
    font-weight: bold;
    font-size: 0.7rem;
    top: 0;
    right: 0;
    position:absolute;
    margin: 5px;
`;

export const DiaCorrente = styled.div`
    width: 0.9rem;
    height: 0.9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    top: 0;
    right: 0;
    position:absolute;
    margin: 5px;
    color: ${Theme.calendarioFundo};
    background-color: ${Theme.textoSecondary};
    border: 0.5px solid ${Theme.textoSecondary};
    border-radius: 50%;
    padding: 1px;
    font-size: 0.6rem;
    font-weight: bold;
`;
