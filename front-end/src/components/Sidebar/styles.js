import  styled from 'styled-components';

export const Container = styled.div`
    background-color: #E2EBFC;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;

    > svg {
        position: fixed;
        color: #9EA9BA;
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

export const Content = styled.div`
    margin-top: 50px;
`;

export const PerfilContainer = styled.div`
    background-color: black;
    width: 100%;
    height: 100px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > img {
        height: 100%;
        border-radius: 100%;
        border: 5px solid white;
    }
`;

