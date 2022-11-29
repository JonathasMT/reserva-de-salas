import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.local ? Theme.textoAccent : Theme.textoSecondaryVariant};
    font-weight: 500;
    font-size: 17px;
    margin: 0;
    padding: 0px;
    border-radius: 0px;
    margin-bottom: 25px;
    cursor: pointer;

    > svg {
        margin: 0 10px;
        height: 20px;
        width: 20px;
    }

    > div {
        background-color: ${props => props.local && Theme.textoAccent};
        width: 4px;
        height: 100%;
        border-radius: 15px;
    }

    &:hover {
        background: ${Theme.hoverFundo};
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
    }
`;