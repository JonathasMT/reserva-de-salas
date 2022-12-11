import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {Container, ContainerSemana, ContainerDia, Dia, DiaCorrente} from './styles';
import CardReserva from '../CardReserva';

import Loading from '../../components/Loading';
import CalendarioLegenda from '../CalendarioLegenda';


function CalendarioMes({data, categorias, reservas, calendarioTipo}) {

    const navegar = useNavigate();
    const [loading, setLoading] = useState(true);
    const [calendario, setCalendario] = useState([]);
    
    useEffect(() => {
        const inicioDia = data.clone().startOf('month').startOf('week');
        const fimDia = data.clone().endOf('month').endOf('week');
        const dia = inicioDia.clone().subtract(1, 'day');
        const calendario = [];
        while (dia.isBefore(fimDia, 'day')) {
            calendario.push(
                Array(7).fill(0).map(() => dia.add(1, 'day').clone())
            );
        };
        setCalendario(calendario);
        setLoading(false);
    }, []);

    //verifica se o dia é o dia atual
    function isAtual(dia) {
        const getData = dia.format('D').toString();
        if (dia.isSame(Date.now(), 'day'))
            return <DiaCorrente key={getData}>{getData}</DiaCorrente>
        else
            return <Dia key={getData}>{getData}</Dia>
    };
    return(
        loading ? <Loading/> :
            <Container>
                {calendario.map((semana) => (
                    <ContainerSemana key={semana}>
                        {semana.map((dia, i) => (
                            <ContainerDia key={i} onClick={(e) => [e.preventDefault(), navegar('/novareserva', {state: {dia: dia.format('YYYY-MM-DD'), categorias: categorias}})]}>
                                {isAtual(dia)}
                                {
                                    reservas.map((reserva, index) => (
                                        reserva.data === dia.format('YYYY-MM-DD') &&
                                            categorias.map((categoria) => (
                                                reserva.categoria_id == categoria.categoria_id &&
                                                    <CardReserva
                                                        key={index}
                                                        tipo={calendarioTipo}
                                                        horaInicio={reserva.hora_inicio}
                                                        horaFim={reserva.hora_fim}
                                                        titulo={reserva.titulo}
                                                        cor={categoria.cor}
                                                    />
                                            ))
                                    ))
                                }
                            </ContainerDia>
                        ))}
                    </ContainerSemana>
                ))}
            </Container>
    );
}

export default CalendarioMes;