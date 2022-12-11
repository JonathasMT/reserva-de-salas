import {Container, Body, ContainerDia, Dia, DiaCorrente} from './styles';

import CardReserva from '../CardReserva';

function CalendarioSemana({calendarioSemana, categorias, reservas, calendarioTipo}) {

    //verifica se o dia é o dia atual
    function isAtual(dia) {
        const getData = dia.format('D').toString();
        if (dia.isSame(Date.now(), 'day'))
            return <DiaCorrente>{getData}</DiaCorrente>
        else
            return <Dia> {getData}</Dia>
    };

    // function novaReserva(dia) {
    //     const atual = moment();
    //     if (dia.isBefore(atual, 'day')) {
    //         alert('Novas reservas só podem ser efetuadas a partir do dia atual: '+atual.format('DD/MM/YYYY'));
    //     }else {
    //         navegar('/novareserva', {state: {dia: dia.format('YYYY-MM-DD'), categorias: categorias}});
    //     };
    // };

    return(
        <Container >
            {calendarioSemana.map((semana) => (
                <Body key={semana}>
                    {semana.map((dia) => (
                        <ContainerDia key={dia}>
                            {isAtual(dia)}
                            {
                                reservas.map((reserva, index) => 
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
                                )
                            }
                        </ContainerDia>
                    ))}
                </Body>
            ))}
        </Container>
    );
}

export default CalendarioSemana;