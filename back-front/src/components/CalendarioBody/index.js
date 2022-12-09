import React from 'react';

import CalendarioDia from '../CalendarioDia';
import CalendarioSemana from '../CalendarioSemana';
import CalendarioMes from '../CalendarioMes';

function CalendarioBody({data, setData, calendarioTipo, reservas, categorias}) {

    const Body = () => {
        switch (calendarioTipo) {
        case 'day':
            return (
                <CalendarioDia 
                    calendarioTipo={calendarioTipo}
                    data={data}
                    setData={setData}
                    reservas={reservas}
                    categorias={categorias}
                />
            );
        case 'week':
            return (
                <CalendarioSemana
                    calendarioTipo={calendarioTipo}
                    data={data}
                    setData={setData}
                    reservas={reservas}
                    categorias={categorias}
                />
            );
            
        case 'month':
            return (
                <CalendarioMes
                    calendarioTipo={calendarioTipo}
                    data={data}
                    setData={setData}
                    reservas={reservas}
                    categorias={categorias}
                />
            );
        };
    };

    return (
        <Body/>
    )

}

export default CalendarioBody;