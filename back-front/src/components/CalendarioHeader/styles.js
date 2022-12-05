import styled from 'styled-components';

import Color from '../../assets/styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-top: 2px solid ${Color.borderCalendario};
    border-left: 2px solid ${Color.borderCalendario};
    border-right: 2px solid ${Color.borderCalendario};
    border-bottom: 1px solid ${Color.borderCalendario};
    background-color: ${Color.fundoCalendarioHeader};
    border-radius: 10px 10px 0px 0px;
    align-items: center;
`;

export const DiasDaSemana = styled.div`
    width: calc(100% / 7);
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${Color.terciaria};
    text-transform: uppercase;
`;

export const DiaDaSemana = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${Color.terciaria};
`;
