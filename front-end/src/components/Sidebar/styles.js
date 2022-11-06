import  styled from 'styled-components';

import { Theme } from '../Theme';

export const Container = styled.div`
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: mostrarSidebar .4s;
    background-color: ${Theme.menuFundo};
    user-select: none;
    
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
`;

export const ContainerPerfil = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    overflow: hidden;

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
