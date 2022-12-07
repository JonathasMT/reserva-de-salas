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
`;

