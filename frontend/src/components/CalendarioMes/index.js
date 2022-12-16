import {useNavigate} from 'react-router-dom';
import moment from 'moment';

import {Container, ContainerSemana, ContainerDia, Dia, DiaCorrente} from './styles';
import CardReserva from '../CardReserva';

function CalendarioMes({calendarioMes, categorias, reservas, calendarioTipo}) {

    const atual = moment();
    const navegar = useNavigate();

    //verifica se o dia é o dia atual
    function isAtual(dia) {
        const getData = dia.format('D').toString();
        if (dia.isSame(atual, 'day'))
            return <DiaCorrente key={getData}>{getData}</DiaCorrente>
        else
            return <Dia key={getData}>{getData}</Dia>
    };

    function novaReserva(dia) {
        if (dia.isBefore(atual, 'day')) {
            alert('Novas reservas só podem ser efetuadas a partir do dia corrente: '+atual.format('DD/MM/YYYY'));
        }else {
            navegar('/novareserva', {state: {dia: dia.format('YYYY-MM-DD'), categorias: categorias}});
        };
    };

    return(
            <Container>
                {calendarioMes.map((semana) => (
                    <ContainerSemana key={semana}>
                        {semana.map((dia, i) => (
                            <ContainerDia key={i} onClick={(e) => [e.preventDefault(), novaReserva(dia)]}>
                                {isAtual(dia)}
                                {
                                    reservas.map((reserva, index) => (
                                        reserva.data === dia.format('YYYY-MM-DD') &&
                                            categorias.map((categoria) => (
                                                reserva.categoria_id == categoria.categoria_id &&
                                                    <CardReserva
                                                        onClick={(e) => [e.preventDefault(), e.stopPropagation(), console.log('FUI CLICADO')]}
                                                        key={index}
                                                        tipo={calendarioTipo}
                                                        horaInicio={reserva.hora_inicio}
                                                        horaFim={reserva.hora_fim}
                                                        titulo={reserva.titulo}
                                                        categoria={categoria}
                                                        reserva={reserva}
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