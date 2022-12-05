import styled from 'styled-components';

import Color from '../../assets/styles/colors';

export const Container = styled.div`
    height: 100%;
    min-width: 1280px;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${Color.fundoGeral};
    padding: 70px 20px;
    font-weight: normal;
`;
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Color.fundoCalendarioBloco};
    border: 2px solid ${Color.borderCalendario};
    border-radius: 10px;
    overflow: hidden;
    //text
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: ${Color.terciaria};
    word-wrap: break-word;

    > table {
        border-collapse: collapse;
        overflow: hidden;
        text-align: center;
    }
    
    td, th {
        padding: 5px;
         
    };
    thead > tr {
        text-transform: uppercase;
        border-bottom: 2px solid ${Color.borderCalendario};
    };
    tbody > tr {
        //cor diferente ao passar o mouse sobre a linha
        :hover {
            background-color: ${Color.acentuada};
            color: ${Color.borderGeral};
        }
    };
`;


// import styled from 'styled-components';

// import Color from '../../assets/styles/colors';

// export const Container = styled.div`
//     height: 100%;
//     min-width: 1280px;
//     min-height: 100vh;
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     background-color: ${Color.fundoGeral};
//     padding: 70px 20px;
// `;

// export const SubContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     background-color: ${Color.fundoCalendarioBloco};
//     border: 2px solid ${Color.borderCalendario};
//     border-radius: 10px;
//     overflow: hidden;
// `;

// export const Coluna = styled.div`
//     min-width: 5px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

// export const LinhaHeader = styled.div`
//     width: 100%;
//     min-height: 25px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding-left: 10px;
//     padding-right: 10px;
//     border-bottom: 2px solid ${Color.borderCalendario};
//     //text
//     text-align: center;
//     font-size: 12px;
//     font-weight: 600;
//     color: ${Color.terciaria};
//     word-wrap: break-word;
// `;

// export const Linha = styled.div`
//     width: 100%;
//     min-height: 25px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding-left: 10px;
//     padding-right: 10px;
//     //text
//     text-align: center;
//     font-size: 12px;
//     font-weight: 600;
//     color: ${Color.terciaria};
//     word-wrap: break-word;
//     :hover {
//             background-color: ${Color.acentuada};
//             color: ${Color.borderGeral};
//         }
// `;