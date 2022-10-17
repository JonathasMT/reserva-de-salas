import  styled from 'styled-components';

import { Theme } from '../Theme';

export const Container = styled.div`
    background-color: ${Theme.menuBackground};
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;

    > svg {
        position: fixed;
        color: ${Theme.textSecondary};
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
`;

export const ProfileContainer = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 160px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
        position:relative;
        height: 120px;
        width: 120px;
        border-radius: 100%;
        border: 5px solid ${Theme.borderProfile};
    }
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction:row;
    font-weight: bold;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    color: ${Theme.textPrimary};
    cursor: pointer;

    > svg {
        margin-left: 10px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;

export const Content = styled.div`
    margin-top: 20px;
`;
