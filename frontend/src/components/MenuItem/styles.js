import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import Color from '../../assets/styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.status ? Color.acentuada : Color.secundaria};
    font-weight: 400;
    font-size: 17px;
    margin: 0;
    padding: 0px;
    border-radius: 0px;
    margin-bottom: 25px;
    gap: 20px;
    cursor: pointer;

    > svg {
        height: 18px;
        width: 18px;
    }

    > div {
        width: 4px;
        height: 100%;
        border-radius: 15px;
        background-color: ${props => props.status && Color.acentuada};

    }

    &:hover {
        background: ${Color.hoverFundo};
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
    }
`;