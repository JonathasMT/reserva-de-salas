import styled from 'styled-components';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
    color: ${Theme.textoAccent};
    font-weight: bold;
    font-size: 20px;
    padding: 0px;
    border-radius: 0px;
    margin-bottom: 20px;
    animation: mostrarSidebar .4s;
    cursor: pointer;

    @keyframes mostrarSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 250px;
        }
    }

    > svg {
        margin: 0 10px;
        height: 25px;
        width: 25px;
    }

    > div {
        background-color: ${Theme.textoAccent};
        width: 5px;
        height: 100%;
        border-radius: 15px;
    }

    &:hover {
        background: ${Theme.hoverFundo};
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
    }
`;