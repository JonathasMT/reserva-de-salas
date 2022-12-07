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
    width: 300px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${Color.fundoSecundario};
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
        }
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

export const Button = styled.button`
    width: 300px;
    height: 40px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    background-color: ${Color.acentuada};
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`;

export const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
`;

export const Circulo = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.cor};
    /* box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2); */
`;


