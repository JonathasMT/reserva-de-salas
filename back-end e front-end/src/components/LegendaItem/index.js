import React from 'react';
import { Container, Circulo, Titulo } from './styles';

const LegendaItem = ({cor, texto}) => {
    return(
        <Container>
            <Circulo style={{backgroundColor: cor}}/>
            <Titulo>{texto}</Titulo>
        </Container>
    )
};

export default LegendaItem;