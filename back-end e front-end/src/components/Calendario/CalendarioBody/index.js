import React from 'react';

import CalendarioDia from '../../CalendarioDia';
import CalendarioSemana from '../../CalendarioSemana';
import CalendarioMes from '../../CalendarioMes';

function CalendarioBody({data, setData, calendarioTipo}) {


    const Body = () => {
        switch (calendarioTipo) {
        case 'day':
            return <CalendarioDia calendarioTipo={calendarioTipo} data={data} setData={setData}/>
        case 'week':
            return <CalendarioSemana calendarioTipo={calendarioTipo} data={data} setData={setData}/>
        case 'month':
            return<CalendarioMes calendarioTipo={calendarioTipo} data={data} setData={setData}/>
        };
    };

    return (
        <Body/>
    )

}

export default CalendarioBody;