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
    margin-top: 20px;
`;

export const ProfileContainer = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 17%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
        position:relative;
        height: auto;
        width: 40%;
        border-radius: 100%;
        border: 5px solid white;
    }
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction:row;
    font-weight: bold;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    color: #454D56;
    cursor: pointer;

    > svg {
        margin-left: 10px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;

