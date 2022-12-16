import styled from 'styled-components';

import Color from '../../assets/styles/colors';

export const Container = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`;

export const SubContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

export const Grupo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
    font-size: 18px;
    color: ${Color.primaria};
    gap: 7px;
    cursor: pointer;

    > svg {
        width: 20px;
        height: 20px;
        padding-left: 5px;
        margin-bottom: -3px;
        cursor: pointer;
    }
`;

export const Sala = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    margin-bottom: -3px;
    font-weight: 600;
    font-size: 14px;
    color: ${Color.secundaria};
    cursor: pointer;

    > svg {
        margin: 0 10px;
        height: 25px;
        width: 25px;
    }
`;

export const InputSelect = styled.select`
    height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 7px;
    padding: 5px;
    background-color: ${Color.fundoGeral};
    
    //fonte
    font-size: 18px;
    font-weight: 600;
    text-align: center;
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
        color: ${Color.secundaria};
    };
    :focus {
        color: ${Color.primaria};
        outline: none;
    };
    /* -webkit-appearance: none; */
`;