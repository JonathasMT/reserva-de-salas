import styled from 'styled-components';

import {Theme} from '../../components/Theme'

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${Theme.fundoGeral};
    padding: 70px 20px;

    /* > table {
        border: 2px solid ${Theme.borderCalendario};
        border-collapse: collapse;
    }

    tr {
        //linha impar sem cor de fundo
        color: ${Theme.secundaria};
        background-color: ${Theme.fundoCalendarioBloco};
    }
    
    td, th {
        border: 2px solid ${Theme.borderCalendario};
        justify-content: center;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
    };
    thead > tr {
        background-color: ${Theme.acentuada};
        color: #fff;
    };
    tbody tr {
        //linha par com cor de fundo branca
        :nth-of-type(even) {
            background-color: ${Theme.secundaria};
        color: ${Theme.fundoCalendarioBloco};
        }
        //cor diferente ao passar o mouse sobre a linha
        :hover {
        background-color: ${Theme.acentuada};
        }
    }; */
`;

export const SubContainer = styled.div`
    height:100%;
    width: 300px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${Theme.fundoSecundario};
`;

export const ContainerLista = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 20px;
    background-color: ${Theme.fundoSecundario};
`;

export const ContainerItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    color: ${Theme.primaria};
    gap: 3px;
`;
//---------------------------------------------

export const ContainerHeader = styled.div`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border: 1px solid ${Theme.borderCalendario};
    background-color: ${Theme.fundoCalendarioHeader};
    border-radius: 10px 10px 0px 0px;
    align-items: center;
`;

export const HeaderColuna = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${Theme.terciaria};
    word-wrap: break-word;
`;

// export const ContainerBody = styled.div`
//     width: 100%;
//     height: 100%;
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     user-select: none;
//     background-color: ${Theme.fundoCalendarioHeader};
//     border: 1px solid ${Theme.borderCalendario};
// `;

export const ContainerBodyLinha = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    background-color: ${Theme.fundoCalendarioHeader};
    border-left: 1px solid ${Theme.borderCalendario};
    border-right: 1px solid ${Theme.borderCalendario};
    border-bottom: 1px solid ${Theme.borderCalendario};
`;

export const ContainerBodyColuna = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    gap: 10px;
    color: ${Theme.terciaria};
`;

export const Body = styled.div`
    width: 100%;
    height: 565px;
    box-sizing: border-box;
    display: flex;
    flex-direction:row;
    border-left: 1px solid ${Theme.borderCalendario};
    border-right: 1px solid ${Theme.borderCalendario};
`;



//-----------------------------------------



