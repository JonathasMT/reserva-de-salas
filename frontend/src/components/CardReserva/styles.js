import styled from 'styled-components';

import Color from '../../assets/styles/colors';

export const Container = styled.div`
    width: 100%;
    min-height: 25px;
    height: ${props => props.altura};
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    background-color: ${props => props.cor};
    gap: 5px;
    border-radius: 5px;
    padding-top: 1px;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    z-index: 10;
    cursor: pointer;

    &:hover {
        transform: translateY(-7%);
    }
`;

export const Hora = styled.div`
    width: auto;
    margin-top: 2px;
    font-size: 9px;
    font-weight: 600;
    color: ${Color.primaria};
    line-height: 100%;
`;

export const Titulo = styled.p`
    width: auto;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 2px;
    //text
    font-size: 9px;
    color: ${Color.fundoGeral};
    text-overflow: ellipsis;
    line-height: 100%;
`;