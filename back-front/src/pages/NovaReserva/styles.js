import styled from 'styled-components';

import {Theme} from '../../components/Theme'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${Theme.menuFundo};
    margin-top: 50px;
`;

export const SubContainer = styled.div`
    height:100%;
    width: 300px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: ${Theme.menuFundo};
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
    background-color: ${Theme.menuFundo};
`;

//-----------------------------------------

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    color: ${Theme.textoPrimary};
    gap: 3px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 10px;
    background-color: #fff;

        ::placeholder {
            color: ${Theme.textoSecondary};
        }
        :focus {
            color: ${Theme.textoPrimary};
            outline: 1px ${Theme.textoAccent};
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
    color: ${Theme.textoPrimary};
    gap: 3px;
`;

export const SubContainerCheckBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: ${Theme.textoSecondary};
`;

export const Checkbox = styled.input.attrs({type: 'radio'})`
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
            color: ${Theme.textoSecondary};
        }
        :focus {
            color: ${Theme.textoPrimary};
            outline: 1px solid ${Theme.textoAccent};
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
        color: ${Theme.textoSecondary};
    }
    :focus {
        color: ${Theme.textoPrimary};
        outline: 1px solid ${Theme.textoAccent};
    }
`;

export const Button = styled.button`
    width: 300px;
    height: 40px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    background-color: ${props => props.tipo? Theme.textoAccent: Theme.textoSecondary};
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;


