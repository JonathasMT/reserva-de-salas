import React from 'react';
import {Container} from './styles';

const MenuItem = ({Icone, Texto, status}) => {

    return(
        <Container status={status}>
            <div />
            {Icone}
            {Texto}
        </Container>
    )
};

export default MenuItem;