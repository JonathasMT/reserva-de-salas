import React, {useEffect, useState} from 'react';
import moment from 'moment';

import {Container} from './styles';
import CalendarioBody from "../CalendarioBody";
import CalendarioHeader from "../CalendarioHeader";
import CalendarioOpcoes from "../CalendarioOpcoes";
import CalendarioLegenda from "../CalendarioLegenda";

import useAuth from '../../hooks/useAuth';
import Carregamento from '../../components/Carregando';

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

    const [carregando, setCarregando] = useState(false)
    const {listarReservas} = useAuth();

    const [data, setData] = useState(moment().locale('pt-br'));
    const [calendarioTipo, setCalendarioTipo] = useState('month');
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const buscarReservas = async() => {
            setCarregando(true);
            const resposta = await listarReservas();
            if (!resposta.erro) {
                setReservas(resposta.reservas);
                setCarregando(false);
                return;
            };
            if (resposta.erro) {
                alert(resposta.msg);
                return;
            };
        };
        buscarReservas();
    }, []);

    return(
        carregando ? <Carregamento/> :
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
            <CalendarioLegenda/>
        </Container>
)
};

export default Calendario;