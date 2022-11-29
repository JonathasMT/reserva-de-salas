import React from 'react';
import {Container} from './styles';

const MenuItem = ({Icone, Texto, Status, local}) => {
    return(
        <Container local={local}>
            <div />
            {Icone}
            {Texto}
        </Container>
    )
};

export default MenuItem;