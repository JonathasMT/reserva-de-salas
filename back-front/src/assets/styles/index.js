import styled from 'styled-components';
import Color from './colors'


//CONTAINERS
export const ContainerFormulario = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${Color.fundoSecundario};
    padding-top: 70px;
    padding-bottom: 20px;
`;

export const SubContainerFormulario = styled.div`
    height:100%;
    width: 300px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${Color.fundoSecundario};
    gap: 20px
`;

export const Formulario = styled.form`
    padding-top: 20px;
    position:relative;
    white-space: nowrap;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 1px solid ${Color.borderGeral};
    border-radius: 20px;
    padding: 20px;
    background-color: ${Color.fundoSecundario};

    /* h3{
        margin: 0;
        padding: 0;
        width: 300px;
        text-align: center;
    };
    p {
        margin: 0;
        padding: 0;
        width: 300px;
        text-align: left;
    }; */
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
    color: ${Color.primaria};
    gap: 3px;
`;

export const SubContainerCheckBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${Color.secundaria};
    gap: 5px;
`;

export const ContainerSenhas = styled.div`
    position:relative;
    white-space: nowrap;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: ${Color.fundoSecundario};

    > p {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 7px;
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
    color: ${Color.primaria};
`;

//INPUTS
export const Input = styled.input`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 10px;
    background-color: ${Color.fundoCalendarioBloco};

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

        ::placeholder {
            font-size: 12px;
            color: ${Color.secundaria};
        };
        :focus {
            color: ${Color.primaria};
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

    option {
        color: black;
        font-weight: small;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 5px;
    }
    ::placeholder {
        color: ${Color.secundaria};
    }
    :focus {
        color: ${Color.primaria};
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

//BUTTONS
export const Botao = styled.button`
    width: 300px;
    height: 40px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    background-color: ${props => props.tipo? Color.acentuada: Color.secundaria};
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
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
    color: white;
    font-size: 10px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 2px 0px 8px 0px rgba(0, 0, 0, 0.2);

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