import styled from 'styled-components';

import { Theme } from '../Theme';

export const Container = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: left;
    color: ${Theme.textAccent};
    font-weight: bold;
    font-size: 20px;
    padding: 0px;
    cursor: pointer;
    border-radius: 0px;
    margin-bottom: 20px;

    > svg {
        margin: 0 10px;
        height: 25px;
        width: 25px;
    }

    > div {
        background-color: ${Theme.textAccent};
        width: 5px;
        height: 100%;
        border-radius: 15px;
    }

    &:hover {
        background: ${Theme.hoverBackground};
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
    }
`;