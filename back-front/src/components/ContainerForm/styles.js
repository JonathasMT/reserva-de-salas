import styled from 'styled-components';

import Color from '../../assets/styles/colors';

export const ContainerForm = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 20px;
    background-color: ${props => props.cor? props.cor : Color.fundoSecundario};
`;