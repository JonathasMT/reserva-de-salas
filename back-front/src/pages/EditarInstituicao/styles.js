import styled from 'styled-components';

import Color from '../../assets/styles/colors';

export const Container = styled.div`
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

export const SubContainer = styled.div`
    height:100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
    background-color: ${Color.fundoSecundario};
    gap: 20px
`;

export const BotaoEditar = styled.button`
    width: 60px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-left: calc(100% - 60px);
    gap: 3px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: ${Color.acentuada};
    color: white;
    font-size: 10px;
    font-weight: 500;
    cursor: pointer;
`;

export const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 20px;
    background-color: ${Color.fundoSecundario};

    h2{
        margin: 0;
        padding: 0;
        width: 300px;
        text-align: center;
    }
    p {
        margin: 0;
        padding: 0;
        width: 300px;
        text-align: left;
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    color: ${Color.primaria};
    gap: 3px;
`;

export const InputImage = styled.input.attrs({type: 'file'})`
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    border: none;
`;

export const Select = styled.select`
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
    }
`;


export const Input = styled.input`
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 10px;
    background-color: ${Color.fundoCalendarioBloco};

        ::placeholder {
            color: ${Color.secundaria};
        }
        :focus {
            color: ${Color.primaria};
        }
`;

export const Button = styled.button`
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


