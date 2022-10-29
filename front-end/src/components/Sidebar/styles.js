import  styled from 'styled-components';

import { Theme } from '../Theme';

export const Container = styled.div`
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;
    background-color: ${Theme.menuBackground};
    user-select: none;

    > svg {
        position: fixed;
        color: ${Theme.textSecondary};
        width: 25px;
        height: 25px;
        margin-top: 15px;
        margin-left: 15px;
        cursor: pointer;
    }

    @keyframes showSidebar {
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

export const ProfileContainer = styled.div`
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
        border: 5px solid ${Theme.borderProfile};
    }
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction:row;
    font-weight: bold;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    color: ${Theme.textPrimary};
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
