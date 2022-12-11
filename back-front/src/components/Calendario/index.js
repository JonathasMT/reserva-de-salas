import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {useNavigate} from 'react-router-dom';

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

    const navegar = useNavigate();
    const {listarCategorias, listarReservas} = useContexto();
    
    const [loading, setLoading] = useState(true);
    const [momento, setMomento] = useState(moment().locale('pt-br'));
    const [calendarioTipo, setCalendarioTipo] = useState('month');
    const [calendarioMes, setCalendario] = useState([]);
    const [calendarioSemana, setCalendarioSemana] = useState([]);
    const [reservas, setReservas] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const inicioMes = momento.clone().startOf('month').startOf('week');
        const fimMes = momento.clone().endOf('month').endOf('week');
        const dia = inicioMes.clone().subtract(1, 'day');
        const arrayMes = [];
        while (dia.isBefore(fimMes, 'day')) {
            arrayMes.push(
                Array(7).fill(0).map(() => dia.add(1, 'day').clone())
            );
        };
        setCalendario(arrayMes);

        const inicioSemana = momento.clone().startOf('week');
        const fimSemana = momento.clone().endOf('week');
        const diaSemana = inicioSemana.clone().subtract(1, 'day');
        const arraySemana = [];
        while (diaSemana.isBefore(fimSemana, 'day')) {
            arraySemana.push(
                Array(7).fill(0).map(() => diaSemana.add(1, 'day').clone())
            );
        };
        setCalendarioSemana(arraySemana)

        const buscarCategorias = async() => {
            const resposta = await listarCategorias();
            if (!resposta.erro) {
                if(resposta.categorias.length > 0) {
                    setCategorias(resposta.categorias);
                }else {
                    alert('Você deve cadastrar pelo menos uma categoria!');
                    navegar('/novacategoria');
                };
            }else {
                alert(resposta.msg);
            };
            return;
        };
        buscarCategorias();
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
    }, [momento]);

    return(
        loading ? <Loading/> :
        <Container>
            <CalendarioOpcoes 
                setMomento={setMomento} 
                calendarioTipo={calendarioTipo}
                setCalendarioTipo={setCalendarioTipo}
                momento={momento}/>
            <CalendarioHeader
                calendarioTipo={calendarioTipo}
                momento={momento}/>
            <CalendarioBody
                calendarioTipo={calendarioTipo}
                momento={momento}
                calendarioSemana={calendarioSemana}
                calendarioMes={calendarioMes}
                categorias={categorias}
                reservas={reservas}/>
            <CalendarioLegenda categorias={categorias}/>
        </Container>
)
};

export default Calendario;