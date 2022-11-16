import { useState } from 'react';

import CalendarioOpcoes from '../../components/CalendarioOpcoes';
import CalendarioDia from '../../components/CalendarioDia';
import CalendarioSemana from '../../components/CalendarioSemana';
import CalendarioMes from '../../components/CalendarioMes';

function Home() {
    const [selecionado, setSelecionado] = useState('mes');

    function clicado(valor) {
        console.log('Clicado ' + valor);
        setSelecionado(valor)
    }

    const Calendario = () => {
        switch (selecionado) {
            case 'dia':
                return <CalendarioDia aoClicar={clicado} selecionado={selecionado}/>
            case 'semana':
                return <CalendarioSemana aoClicar={clicado} selecionado={selecionado}/>
            case 'mes':
                return <CalendarioMes aoClicar={clicado} selecionado={selecionado}/>
        };
    };

    return(
        <>
            <Calendario/>
        </>
        
    )
}

export default Home