import React from 'react';
import {Container} from './styles';

const MenuItem = ({Icone, Texto, Status}) => {
    return(
        <Container>
            <div />
            {Icone}
            {Texto}
        </Container>
    )
};

export default MenuItem;