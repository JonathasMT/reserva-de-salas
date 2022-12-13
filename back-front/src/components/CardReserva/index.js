import React from 'react';
import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom';


import {Container, Hora, Titulo} from './styles';

function CardReserva({categoria, horaInicio, horaFim, titulo, tipo, reserva}) {
    const navegar = useNavigate();

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

    const detalhesReserva = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('FUI CLICADO, ID: '+JSON.stringify(reserva));
        navegar('/detalhesreserva', {state: {reserva: reserva, categoria: categoria}})



    }
    return(
        <Container cor={categoria.cor} altura={height} onClick={detalhesReserva}>
            <Hora>{horaInicio}~{horaFim}</Hora>
            <Titulo>{titulo}</Titulo>
        </Container>
    );
}

export default CardReserva;