import React from 'react';
import {Container, Hora, Titulo} from './styles';

function CardReserva({cor, horaInicio, horaFim, tipo}) {
    return(
        <Container cor={cor} tipo={tipo}>
            <Hora>{horaInicio}~{horaFim}</Hora>
            <Titulo>Comunicação Argumentativa II</Titulo>
        </Container>
    );
}

export default CardReserva;