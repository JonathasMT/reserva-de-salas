import styled from 'styled-components';
import Color from './colors'

//CONTAINERS DE FORMULARIO
export const ContainerFormulario = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.tipo? 'center': 'flex-start'};
    background-color: ${Color.fundoSecundario};
    padding-top: 70px;
    padding-bottom: 20px;
    user-select: none;
`;

export const SubContainerFormulario = styled.div`
    width: 300px;
    height:100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${Color.fundoSecundario};
    gap: 20px;
`;

export const Formulario = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:relative;
    white-space: pre-line;
    border: 1px solid ${Color.borderGeral};
    border-radius: 20px;
    background-color: ${Color.fundoSecundario};
    padding-top: 20px;
    padding: 20px;
    gap: 20px;

    > h3{
        margin: 0;
        padding: 0;
    };
    > p {
        margin: 0;
        padding: 0;
        width: 300px;
        text-align: left;
    };

    >span {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-weight: 400;
    };

    /* input:-webkit-autofill {
        border: 1px solid ${Color.acentuada};
    }
    input:autofill {
        border: 1px solid ${Color.acentuada};
    } */

/* input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${Color.fundoCalendarioBloco} inset !important;
    color: ${Color.secundaria};
} */

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus {
  border: none;
  -webkit-text-fill-color: ${Color.primaria};
  -webkit-box-shadow: 0 0 0px 1000px ${Color.fundoCalendarioBloco}  inset;
  transition: background-color 5000s ease-in-out 0s;
}

`;

export const ContainerHora = styled.time`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border: none;
    border-radius: 7px;
    gap: 20px;
`;

export const ContainerCheckBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    gap: 3px;
`;

export const SubContainerCheckBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${Color.primaria};
    gap: 5px;
`;

export const ContainerSenhas = styled.div`
    width: 300px;
    height: auto;
    position:relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: ${Color.fundoSecundario};
    white-space: pre-line;

    > p {
        text-align: left;
        font-size: 12px;
        border: 1px solid white;
        border-radius: 7px;
        padding: 5px;
        margin: 0;
    }

`;

export const Label = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    margin-bottom: -17px;
    //font
    color: ${Color.primaria};

`;

//INPUTS DE FORMULARIO
export const Input = styled.input`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 10px;
    background-color: ${Color.fundoCalendarioBloco};
    color: ${Color.primaria};

        ::placeholder {
            font-size: 12px;
            color: ${Color.secundaria};
        };
        :focus {
            color: ${Color.primaria};
            outline: 1px solid ${Color.acentuada};
        };
`;

export const InputArea = styled.textarea`
    width: 300px;
    height: 100px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 10px;
    resize: none;
    background-color: ${Color.fundoCalendarioBloco};
    color: ${Color.primaria};

        ::placeholder {
            font-size: 12px;
            color: ${Color.primaria};
        };
        :focus {
            color: ${Color.secundaria};
            outline: 1px solid ${Color.acentuada};
        };
`;

export const InputSelect = styled.select`
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    font-size: 14px;
    background-color: ${Color.fundoCalendarioBloco};
    color: ${Color.primaria};

    option {
        color: black;
        font-weight: small;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 5px;
    }
    ::placeholder {
        color: ${Color.primaria};
    }
    :focus {
        color: ${Color.secundaria};
        outline: 1px solid ${Color.acentuada};
    }
`;

export const InputCheckbox = styled.input.attrs({type: 'checkbox'})`
    width: 15px;
    height: 15px;
    border: none;
    font-size: 14px;
`;

export const InputCor = styled.input.attrs({type: 'color'})`
    width: 100%;
    height: 30px;
    display: flex;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    background-color: ${Color.fundoCalendarioBloco};
    padding-left: 3px;
    padding-right: 3px;

        ::placeholder {
            color: ${Color.secundaria};
        };
        :focus {
            color: ${Color.primaria};
            outline: 1px ${Color.acentuada};
        };
`;

//BUTTONS DE FORMULARIO
export const Botao = styled.button`
    width: 300px;
    height: 40px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    background-color: ${props => props.tipo? Color.acentuada: Color.secundaria};
    cursor: pointer;
    //text
    color: ${Color.fundoCalendarioBloco};
    font-size: 20px;
    font-weight: 600;
   
`;

export const BotaoFlutuante = styled.button`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    top: 0;
    right: 0;
    position:absolute;
    margin: 20px;
    gap: 3px;
    padding: 5px;
    border: none;
    border-radius: 9px;
    background-color: ${Color.acentuada};
    box-shadow: 2px 0px 8px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    //text
    color: ${Color.fundoCalendarioBloco};
    font-size: 10px;
    font-weight: 500;

    >svg {
        box-sizing: border-box;
        width: 15px;
        height: 15px;
    }
`;

export const Listagem = styled.div`
    width: 300px;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 0 10px;
    background-color: ${Color.fundoCalendarioBloco};
    color: ${Color.terciaria};
    font-size: 12px;
`;

//CONTAINERS DE TABELA
export const ContainerTabela = styled.div`
    height: 100%;
    min-width: 1280px;
    min-height: 100vh;
    position:relative;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${Color.fundoGeral};
    padding: 70px 20px;
    font-weight: normal;
`;

export const ContainerTituloTabela = styled.div`
    width: auto;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    gap: 10px
`;

export const SubContainerTabela = styled.div`
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
    };
    th {
        padding: 5px;
    };
    td{
        padding: 5px 5px;
        > svg {
            cursor: pointer;
        };
    };
    thead > tr {
        text-transform: uppercase;
    };
    tbody > tr {
        //cor diferente ao passar o mouse sobre a linha
        :hover {
            background-color: ${Color.acentuada};
            color: ${Color.borderGeral};
        };
    };
    td, th {
        border:2px solid ${Color.borderCalendario}; 
    };
    tr:first-child th {
        border-top: 0;
    };
    td, th:first-child {
        border-left: 0;
    };
    tr:last-child td {
        border-bottom: 0;
    };
    th, td:last-child {
        border-right: 0;
    };
`;

export const BotaoTabela = styled.button`
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 3px;
    padding: 5px;
    border: none;
    border-radius: 9px;
    background-color: ${Color.acentuada};
    box-shadow: 2px 0px 8px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    //fonte
    font-size: 10px;
    font-weight: 500;
    color: ${Color.fundoCalendarioBloco};


    >svg {
        box-sizing: border-box;
        width: 15px;
        height: 15px;
    }
`;

export const ContainerListGrupo = styled.div`
    width: 300px;
    min-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 2px 10px;
    background-color: ${Color.fundoCalendarioBloco};
    color: ${Color.primaria};
    font-size: 15px;

    > svg {
        cursor: pointer;
        color: ${Color.primaria};
    };
`;

export const ListGrupo = styled.div`
    width: 300px;
    min-height: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: 0 10px;

    > div {
        display:flex;
        flex-direction: row;
        gap: 5px;

        >svg {
        cursor: pointer;
        };
    };
`;

export const ListSala = styled.div`
    width: 250px;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 0 10px;
    background-color: ${Color.borderCalendario};
    color: ${Color.secundaria};
    font-size: 12px;
    margin: 3px;

    >svg {
        width: 18px;
        height: 18px;
        cursor: pointer;
        color: ${Color.primaria};
    };
`;