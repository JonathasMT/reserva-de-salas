import React from 'react';
import {Container, Hora, Titulo} from './styles';

function CardReserva({cor, horaInicio, horaFim, titulo, tipo}) {
    return(
        <Container cor={cor} tipo={tipo}>
            <Hora>{horaInicio}~{horaFim}</Hora>
            <Titulo>{titulo}</Titulo>
        </Container>
    );
}

export default CardReserva;