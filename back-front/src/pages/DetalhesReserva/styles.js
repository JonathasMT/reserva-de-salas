import styled from 'styled-components';

import {Theme} from '../../components/Theme'

export const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${Theme.menuFundo};
    padding: 20px;

    table {
        border-collapse: collapse;
        font-size: 15px;
        max-width: 50%;
    };
    th {
        border: 2px solid ${Theme.border};
        padding-left: 10px;
        padding-right: 10px;
        text-align: left;
        background-color: ${Theme.textoAccent};
        color: #000;
    };
    td {
        border: 2px solid ${Theme.border};
        padding-left: 10px;
        padding-right: 10px;
        text-align: left;
        color: ${Theme.textoPrimary};
    };
    tr {
        background-color: ${Theme.calendarioFundo};
    }
    tbody tr {
        //cor diferente ao passar o mouse sobre a linha
        :hover {
        background-color: ${Theme.textoAccent};
        }
    };
`;