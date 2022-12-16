import {createGlobalStyle} from 'styled-components';
import Color from '../../assets/styles/colors';

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    html {
        height: 100%;
    }
    body {
        min-height: 100vh;
        background-color: ${Color.fundoGeral};
        overflow-y: scroll;
    }
`;

export default GlobalStyle;