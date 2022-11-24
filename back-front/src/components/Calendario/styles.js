import styled from 'styled-components';

import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    min-width: 1280px;
    min-height: 720px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 5%;
    padding-right: 5%;
    user-select: none;
`;