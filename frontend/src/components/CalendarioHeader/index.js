import React, {useState, useEffect} from 'react';
import {Container, DiaDaSemana, DiasDaSemana} from './styles';


function CalendarioHeader({momento, calendarioTipo}) {

    const diasSemana = momento.localeData().weekdays()

    function dias() {
        if(calendarioTipo === 'day') {
            return <DiaDaSemana>{momento.format('dddd')}</DiaDaSemana>
        }else {
            return(
                diasSemana.map(
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