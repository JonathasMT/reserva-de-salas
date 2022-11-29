import  styled, {css} from 'styled-components';
import {NavLink} from 'react-router-dom';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
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
    box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.2);
    
    a {
        text-decoration: none;
    };

    > svg {
        position: fixed;
        color: ${Theme.textoSecondary};
        width: 25px;
        height: 25px;
        margin-top: 15px;
        margin-left: 15px;
        cursor: pointer;
    };

    @keyframes mostrarMenu {
        from {
            transform: translateX(-250px);
        }
        to {
        transform: translateX(0px);
        }
    };
`;

export const ContainerPerfil = styled.div`
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    > img {
        position:relative;
        height: 100px;
        width: 100px;
        border-radius: 100%;
        border: 5px solid ${Theme.borderPerfil};
    };
`;

export const ContainerNome = styled.div`
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction:row;
    font-weight: 600;
    font-size: 16px;
    color: ${Theme.textoPrimary};
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;

    > p {
        padding: 0;
        margin: 0;
    }

    > svg {
        width: 25px;
        height: 25px;
        margin-left: 5px;
        cursor: pointer;
    };
`;

export const Content = styled.div`
    width: 100%;
    margin-top: 0px;
    
    >a {
        .active {
            background-color: red;
        }
    }
`;

export const ItemLink = styled(NavLink)`
    background-color: blue;
    &.active {
        background-color: #f8dc2f;
    }
`;
