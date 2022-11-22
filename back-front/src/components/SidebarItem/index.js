import React from 'react';
import {Container} from './styles';

const SidebarItem = ({Icone, Texto, Status}) => {
    return(
        <Container>
            <div />
            {Icone}
            {Texto}
        </Container>
    )
};

export default SidebarItem;