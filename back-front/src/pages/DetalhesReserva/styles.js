import styled from 'styled-components';

import Color from '../../assets/styles/colors';

export const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${Color.fundoSecundario};
    padding: 20px;

    table {
        border-collapse: collapse;
        font-size: 15px;
        max-width: 50%;
    };
    th {
        border: 2px solid ${Color.borderCalendario};
        padding-left: 10px;
        padding-right: 10px;
        text-align: left;
        background-color: ${Color.acentuada};
        color: #000;
    };
    td {
        border: 2px solid ${Color.borderCalendario};
        padding-left: 10px;
        padding-right: 10px;
        text-align: left;
        color: ${Color.primaria};
    };
    tr {
        background-color: ${Color.fundoCalendarioBloco};
    }
    tbody tr {
        //cor diferente ao passar o mouse sobre a linha
        :hover {
        background-color: ${Color.acentuada};
        }
    };
`;