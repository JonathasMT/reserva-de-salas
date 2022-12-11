import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {Container, ContainerSemana, ContainerDia, Dia, DiaCorrente} from './styles';
import CardReserva from '../CardReserva';

import useContexto from '../../hooks/useContexto';
import Loading from '../../components/Loading';
import CalendarioLegenda from '../CalendarioLegenda';


function CalendarioMes({data, reservas, calendarioTipo}) {

    const navegar = useNavigate();
    const {listarCategorias} = useContexto();
    const [loading, setLoading] = useState(false);
    const [calendario, setCalendario] = useState([]);
    const [categorias, setCategorias] = useState([]);


    useEffect(() => {
        setLoading(true);
        const buscarCategorias = async() => {
            const resposta = await listarCategorias();
            if (!resposta.erro) {
                setCategorias(resposta.categorias)
            }else {
                alert(resposta.msg);
            };
            setLoading(false);
            return;
        };
        buscarCategorias();

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
    }, [data]);

    //verifica se o dia é o dia atual
    function isAtual(dia) {
        const getData = dia.format('D').toString();
        if (dia.isSame(Date.now(), 'day'))
            return <DiaCorrente>{getData}</DiaCorrente>
        else
            return <Dia> {getData}</Dia>
    };

    function renderizaCard(reserva, i) {
        const categoria = categorias.find((categoria) => reserva.categoria_id == categoria.categoria_id);
        const cor = categoria.cor
        return(
            <CardReserva
                key={i}
                tipo={calendarioTipo}
                horaInicio={reserva.hora_inicio}
                horaFim={reserva.hora_fim}
                titulo={reserva.titulo}
                cor={cor}
            />
        );
    };

    return(
        loading ? <Loading/> :
            <Container>
                {calendario.map((semana) => (
                    <ContainerSemana key={semana}>
                        {semana.map((dia, i) => (
                            <ContainerDia key={i} onClick={(e) => [e.preventDefault(), navegar('/novareserva', {state: {dia: dia.format('YYYY-MM-DD')}})]}>
                                {isAtual(dia)}
                                {
                                    reservas.map((reserva, i) => 
                                        reserva.data === dia.format('YYYY-MM-DD') 
                                        && 
                                        renderizaCard(reserva, i)
                                    )
                                }
                            </ContainerDia>
                        ))}
                    </ContainerSemana>
                ))}
                <CalendarioLegenda categorias={categorias}/>
            </Container>
    );
}

export default CalendarioMes;