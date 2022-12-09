import styled from 'styled-components';

import Color from '../../assets/styles/colors';

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
    border-left: 1px solid ${Color.borderCalendario};
    border-right: 1px solid ${Color.borderCalendario};
`;

export const ContainerDia = styled.div`
    width: calc(100% / 7);
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    background-color: ${Color.fundoCalendarioBloco};
    border: 1px solid ${Color.borderCalendario};
    padding: 20px 7px;
    gap: 3px;
    overflow: auto;
    cursor: pointer;
    ::-webkit-scrollbar {
        width: 0px;
    }
`;

export const Dia = styled.div`
    top: 0;
    right: 0;
    position:absolute;
    margin: 5px;
    //fonte
    font-size: 0.7rem;
    font-weight: 600;
    color: ${Color.secundaria};




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
    background-color: ${Color.secundaria};
    border-radius: 50%;
    margin: 3px;
    padding: 2px;
    //fonte
    font-size: 0.7rem;
    font-weight: 600;
    color: ${Color.fundoCalendarioBloco};
`;
