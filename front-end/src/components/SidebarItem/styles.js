import React from 'react';
import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
    align-items: center;
    color: #418EE2;
    font-weight: bold;
    font-size: 20px;
    padding: 0px;
    cursor: pointer;
    border-radius: 0px;
    margin: 0 15px 0 px;
    margin-bottom: 24px;
    height: 50px;

    > svg {
        margin: 0 20px;
        height: 30px;
        width: 30px;
    }

    > div {
        background-color: #418EE2;
        width: 6px;
        height: 100%;
        border-radius: 20px;
    }

    &:hover {
        background: rgba( 255, 255, 255, 0.35 );
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
    }
`;