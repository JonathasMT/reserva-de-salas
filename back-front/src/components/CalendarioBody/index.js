import React from 'react';

import CalendarioDia from '../CalendarioDia';
import CalendarioSemana from '../CalendarioSemana';
import CalendarioMes from '../CalendarioMes';

function CalendarioBody({data, setData, calendarioTipo, categorias, reservas}) {

    const Body = () => {
        switch (calendarioTipo) {
        case 'day':
            return (
                <CalendarioDia 
                    calendarioTipo={calendarioTipo}
                    data={data}
                    setData={setData}
                    categorias={categorias}
                    reservas={reservas}/>
            );
        case 'week':
            return (
                <CalendarioSemana
                    calendarioTipo={calendarioTipo}
                    data={data}
                    setData={setData}
                    categorias={categorias}
                    reservas={reservas}/>
            );
            
        case 'month':
            return (
                <CalendarioMes
                    calendarioTipo={calendarioTipo}
                    data={data}
                    setData={setData}
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