import styled from 'styled-components';

import {Theme} from '../../components/Theme'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${Theme.menuFundo};
    padding: 50px 20px;

    > table {
        border: 2px solid ${Theme.border};
        border-collapse: collapse;
    }

    tr {
        //linha impar sem cor de fundo
        color: ${Theme.textoSecondary};
        background-color: ${Theme.calendarioFundo};
    }
    
    td, th {
        border: 2px solid ${Theme.border};
        justify-content: center;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
    };
    thead > tr {
        background-color: ${Theme.textoAccent};
        color: #fff;
    };
    tbody tr {
        //linha par com cor de fundo branca
        :nth-of-type(even) {
            background-color: ${Theme.textoSecondary};
        color: ${Theme.calendarioFundo};
        }
        //cor diferente ao passar o mouse sobre a linha
        :hover {
        background-color: ${Theme.textoAccent};
        }
    };
`;
