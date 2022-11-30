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
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.fundoSecundario};
    gap: 20px
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
    background-color: ${Theme.acentuada};
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

export const Form = styled.div`
    position:relative;
    white-space: nowrap;
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
    color: ${Theme.primaria};
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
    }
`;


export const Input = styled.input`
    width: 300px;
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 10px;
    background-color: #fff;

        ::placeholder {
            color: ${Theme.secundaria};
        }
        :focus {
            color: ${Theme.primaria};
        }
`;

export const List = styled.div`
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
    background-color: #fff;
    color: ${Theme.secundaria};
    font-size: 15px;

    >svg {
        cursor: pointer;
        color: ${Theme.primaria};
    }
`;

export const ContainerList = styled.div`
    width: 300px;
    min-height: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: 0 10px;
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
    background-color: #fff;
    color: ${Theme.primaria};
    font-size: 15px;
    >svg {
        cursor: pointer;
        color: ${Theme.primaria};
    }
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
    background-color: ${Theme.borderCalendario};
    color: ${Theme.secundaria};
    font-size: 15px;
    margin: 3px;

    >svg {
        cursor: pointer;
        color: ${Theme.primaria};
    }
`;

export const FormSala = styled.div`
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

export const Button = styled.button`
    width: 300px;
    height: 40px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    background-color: ${Theme.acentuada};
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;


