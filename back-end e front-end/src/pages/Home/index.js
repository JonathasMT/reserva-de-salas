import CalendarioMes from '../../components/CalendarioMes';
import CalendarioDia from '../../components/CalendarioDia';
import CalendarioSemana from '../../components/CalendarioSemana';

function Home(selecionado) {

    console.log(selecionado)

    return(

        <div>
            {
                selecionado === 'dia' ? 
                <CalendarioDia/> :
                selecionado === 'semana' ?
                <CalendarioSemana/> :
                <CalendarioMes/>
            }
        </div>
    )
}

export default Home