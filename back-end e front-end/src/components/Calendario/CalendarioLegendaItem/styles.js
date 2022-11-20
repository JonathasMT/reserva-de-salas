import styled from 'styled-components';

import {Theme} from '../../Theme';

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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
`;

export const Titulo = styled.div`
    font-size: 15px;
    color: ${Theme.textoSecondary};
`;
