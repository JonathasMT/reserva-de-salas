import styled from 'styled-components';

import {Theme} from '../Theme';

export const Container = styled.div`
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

export const DiasDaSemana = styled.div`
    width: calc(100% / 7);
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${Theme.textoSecondaryVariant};
`;

export const DiaDaSemana = styled.div`
    width: calc(100%);
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${Theme.textoSecondaryVariant};
`;
