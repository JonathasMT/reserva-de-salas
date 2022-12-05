import styled from 'styled-components';
import Color from './colors'

export const Label = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    color: ${Color.primaria};
    gap: 3px;
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
            color: ${Color.secundaria};
        }
        :focus {
            color: ${Color.primaria};
            outline: 1px solid ${Color.acentuada};
        }
`;