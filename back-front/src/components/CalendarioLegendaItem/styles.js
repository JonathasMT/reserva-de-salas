import styled from 'styled-components';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding-left: 5px;
`;

export const Circulo = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 8px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const Titulo = styled.div`
    font-size: 15px;
    color: ${Theme.secundaria};
`;
