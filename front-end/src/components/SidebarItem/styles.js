import styled from 'styled-components';

import { Theme } from '../Theme';



export const Container = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: left;
    color: ${Theme.textAccent};
    font-weight: bold;
    font-size: 20px;
    padding: 0px;
    cursor: pointer;
    border-radius: 0px;
    margin: 0 15px 0 px;
    margin-bottom: 24px;

    > svg {
        margin: 0 20px;
        height: 30px;
        width: 30px;
    }

    > div {
        background-color: ${Theme.textAccent};
        width: 6px;
        height: 100%;
        border-radius: 20px;
    }

    &:hover {
        background: ${Theme.hoverBackground};
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
    }
`;