import { createGlobalStyle } from 'styled-components';
import { Theme } from '../components/Theme';

const GlobalStyle = createGlobalStyle `
    body, html, header {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        background-color: ${Theme.fundo};
    }
`;

export default GlobalStyle;