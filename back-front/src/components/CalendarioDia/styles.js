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

export const Body = styled.div`
    width: 100%;
    height: 565px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
    position:relative;
    background-color: ${Color.fundoCalendarioBloco};
    border: 1px solid ${Color.borderCalendario};
    padding: 50px 10px;
    gap: 5px;
    
    cursor: pointer;
        :hover {
        background-color: ${Color.hoverFundo};
    };
`;

export const Dia = styled.div`
    box-sizing: border-box;
    color: ${Color.secundaria};
    font-weight: 600;
    font-size: 1.5rem;
    top: 0;
    right: 0;
    position:absolute;
    margin: 15px;
`;

export const DiaCorrente = styled.div`
    //circulo
    width: 1.9rem;
    height: 1.9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position:absolute;
    top: 0;
    right: 0;
    background-color: ${Color.secundaria};
    border-radius: 50%;
    margin: 10px;
    padding: 3px;
    //fonte
    font-size: 1.3rem;
    font-weight: 600;
    color: ${Color.fundoCalendarioBloco};
`;
