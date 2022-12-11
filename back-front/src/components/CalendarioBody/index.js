import React from 'react';

import CalendarioDia from '../CalendarioDia';
import CalendarioSemana from '../CalendarioSemana';
import CalendarioMes from '../CalendarioMes';

function CalendarioBody({momento, calendarioTipo, calendarioMes, calendarioSemana, categorias, reservas}) {

    const Body = () => {
        switch (calendarioTipo) {
        case 'day':
            return (
                <CalendarioDia 
                    calendarioTipo={calendarioTipo}
                    momento={momento}
                    categorias={categorias}
                    reservas={reservas}/>
            );
        case 'week':
            return (
                <CalendarioSemana
                    calendarioTipo={calendarioTipo}
                    calendarioSemana={calendarioSemana}
                    categorias={categorias}
                    reservas={reservas}/>
            );
            
        case 'month':
            return (
                <CalendarioMes
                    calendarioTipo={calendarioTipo}
                    calendarioMes={calendarioMes}
                    categorias={categorias}
                    reservas={reservas}/>
            );
        };
    };

    return (
        <Body/>
    )

}

export default CalendarioBody;