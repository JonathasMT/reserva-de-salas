import React from 'react';
import {Container, Hora, Titulo} from './styles';

function CardReserva({cor, horaInicio, horaFim, titulo, tipo}) {
    const height = () => {
        switch (tipo) {
            case 'day':
                return '80px'
            case 'week':
                return '40px'
            case 'month':
                return '20px'
            default:
                return '20px';
            };
    };
    return(
        <Container cor={cor} altura={height}>
            <Hora>{horaInicio}~{horaFim}</Hora>
            <Titulo>{titulo}</Titulo>
        </Container>
    );
}

export default CardReserva;