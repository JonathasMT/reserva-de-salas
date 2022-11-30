import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.local ? Theme.acentuada : Theme.secundaria};
    font-weight: 500;
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
        background-color: ${props => props.local && Theme.acentuada};

    }

    &:hover {
        background: ${Theme.hoverFundo};
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
    }
`;