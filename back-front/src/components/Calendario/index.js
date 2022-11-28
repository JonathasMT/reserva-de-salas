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
        weekdays: ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO']});
    moment.locale('pt-br');

    const [carregando, setCarregando] = useState(false)
    const {listarReservas} = useAuth();

    const [data, setData] = useState(moment());
    const [calendarioTipo, setCalendarioTipo] = useState('month');
    const [reservas, setReservas] = useState([]);

    const buscarReservas = async() => {
        setCarregando(true);
        const resposta = await listarReservas();
        setCarregando(false);
        if (!resposta.erro) {
            setReservas(resposta.reservas)
        };
        if (resposta.erro) {
            alert(resposta.msg);
            return;
        };
        setCarregando(false);
    };
    useEffect(() => {
        buscarReservas();
    }, []);

    return(
        <Container>
            {carregando && <Carregamento/>}
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