import styled from 'styled-components';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
`;

export const SubContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

export const Seletor = styled.div`
    width: auto;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: ${Theme.textoPrimary};
    gap: 7px;

    > svg {
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
`;

export const Corrente = styled.div`
    font-weight: 700;
    font-size: 18px;
    margin-left: 18px;
    margin-right: 18px;
    cursor: pointer;
`;

export const DataHora = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: -3px;
    font-weight: 600;
    font-size: 14px;
    color: ${Theme.textoSecondary};
    cursor: pointer;
`;