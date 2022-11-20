import React, {useState, useEffect} from 'react';
import {Container, DiaDaSemana, DiasDaSemana} from './styles';


function CalendarioHeader({data, calendarioTipo}) {
    const valor = calendarioTipo==='day'
    const diasDaSemana = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO'];

    function dias() {
        if(valor) {
            return <DiaDaSemana>{data.format('dddd')}</DiaDaSemana>
        }else {
            return(
                diasDaSemana.map(
                    (d) => <DiasDaSemana key={d}>{d}</DiasDaSemana>
                )
            )
        }
    }

    return(

        <Container>
            {
                dias()
            }
        </Container>
    );
}

export default CalendarioHeader;