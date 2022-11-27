import  styled from 'styled-components';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 6;
    position: fixed;
    top: 0px;
    left: 0px;

`;

export const ContainerVazio = styled.div`
width: 100%;
height: 100%;
`;

export const ContainerMenu = styled.div`
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    left: ${props => props.menu ? '0' : '-100%'};
    animation: mostrarMenu .4s;
    background-color: ${Theme.menuFundo};
    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    
    a {
        text-decoration: none;
    }

    > svg {
        position: fixed;
        color: ${Theme.textoSecondary};
        width: 25px;
        height: 25px;
        margin-top: 15px;
        margin-left: 15px;
        cursor: pointer;
    }

    @keyframes mostrarMenu {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 250px;
        }
    }
`;

export const ContainerPerfil = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    overflow: hidden;
    padding-top: 25px;

    > img {
        position:relative;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        border: 5px solid ${Theme.borderPerfil};
    }
`;

export const ContainerNome = styled.div`
    display: flex;
    flex-direction:row;
    font-weight: bold;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    color: ${Theme.textoPrimary};
    cursor: pointer;

    > svg {
    margin-left: 10px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    }
`;

export const Content = styled.div`
    margin-top: 10px;
`;
