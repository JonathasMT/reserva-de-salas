import styled from 'styled-components';

import { Theme } from '../Theme';

export const Container = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    font-size: 20px;
    color: ${Theme.textSecondary};
    padding: 0px;
    cursor: none;
    border-radius: 0px;
    margin: 0 15px 0 px;
    margin-bottom: 24px;

    > circle {
        /* background-color: ${Theme.textAccent}; */
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin-right: 8px;
    }
`;