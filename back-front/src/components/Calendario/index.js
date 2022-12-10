import React, {useEffect, useState} from 'react';
import moment from 'moment';

import {Container} from './styles';
import CalendarioBody from "../CalendarioBody";
import CalendarioHeader from "../CalendarioHeader";
import CalendarioOpcoes from "../CalendarioOpcoes";
import CalendarioLegenda from "../CalendarioLegenda";

import useContexto from '../../hooks/useContexto';
import Loading from '../../components/Loading';

function Calendario() {
    //tradução do moment para PT-BR;
    moment.updateLocale('pt-br', {
            months : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            weekdaysMin: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']});
    moment.locale('pt-br');

    const [loading, setLoading] = useState(false)
    const {listarReservas} = useContexto();

    const [data, setData] = useState(moment().locale('pt-br'));
    const [calendarioTipo, setCalendarioTipo] = useState('month');
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        setLoading(true);
        const buscarReservas = async() => {
            const resposta = await listarReservas();
            if (!resposta.erro) {
                setReservas(resposta.reservas);
            }else{
                alert(resposta.msg);
            };
            setLoading(false);
            return;
        };
        buscarReservas();
    }, []);

    return(
        loading ? <Loading/> :
        <Container>
            <CalendarioOpcoes 
                setData={setData} 
                calendarioTipo={calendarioTipo}
                setCalendarioTipo={setCalendarioTipo}
                data={data}/>
            <CalendarioHeader
                calendarioTipo={calendarioTipo}
                data={data}/>
            <CalendarioBody
                calendarioTipo={calendarioTipo}
                data={data}
                setData={setData}
                reservas={reservas}/>
        </Container>
)
};

export default Calendario;