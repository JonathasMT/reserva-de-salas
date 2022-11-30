import styled from 'styled-components';

import {Theme} from '../../components/Theme'

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${Theme.fundoSecundario};
    padding-top: 70px;
    padding-bottom: 20px;
`;

export const SubContainer = styled.div`
    height:100%;
    width: 300px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.fundoSecundario};
`;

export const Form = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 20px;
    background-color: ${Theme.fundoSecundario};
`;

//-----------------------------------------

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    color: ${Theme.primaria};
    gap: 3px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 10px;

        ::placeholder {
            color: ${Theme.secundaria};
        }
        :focus {
            color: ${Theme.primaria};
            outline: 1px ${Theme.acentuada};
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
    color: ${Theme.primaria};
    gap: 3px;
`;

export const SubContainerCheckBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${Theme.secundaria};
`;

export const Checkbox = styled.input.attrs({type: 'checkbox'})`
    width: 15px;
    height: 15px;
    border: none;
    font-size: 14px;
`;

export const InputTextArea= styled.textarea`
    width: 300px;
    height: 100px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 10px;
    resize: none;
    background-color: #fff;

        ::placeholder {
            color: ${Theme.secundaria};
        }
        :focus {
            color: ${Theme.primaria};
            outline: 1px solid ${Theme.acentuada};
        }
`;

export const Select = styled.select`
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    font-size: 14px;
    background-color: #fff;

    option {
        color: black;
        font-weight: small;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 5px;
    }
    ::placeholder {
        color: ${Theme.secundaria};
    }
    :focus {
        color: ${Theme.primaria};
        outline: 1px solid ${Theme.acentuada};
    }
`;

export const Button = styled.button`
    width: 300px;
    height: 40px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    background-color: ${props => props.tipo? Theme.acentuada: Theme.secundaria};
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;


