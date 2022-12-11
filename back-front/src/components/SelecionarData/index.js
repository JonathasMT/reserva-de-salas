import moment from 'moment';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

import {Container, SubContainer, Seletor, DataHora, Corrente} from './styles';

function SelecionarData({momento, setMomento, calendarioTipo}) {
    
    function nomeDiaCorrente() {
        return (
            momento.format('D [de] MMMM [de] YYYY')
        );
    };

    function nomeSemanaCorrente() {
        const inicioSemana = momento.clone().startOf('week').format('DD/MM/YY');
        const finalSemana = momento.clone().endOf('week').format('DD/MM/YY');
        return (
            inicioSemana + ' a ' + finalSemana
        );
    };

    function nomeMesCorrente() {
        return (
            momento.format('MMMM [de] YYYY')
        );
    };

    function mesAnterior() {
        return momento.clone().subtract(1, calendarioTipo);
    };

    function mesProximo() {
        return momento.clone().add(1, calendarioTipo);
    };

    function mesCorrente() {
        setMomento(moment())
    }

    function momentoTipo() {
        if(calendarioTipo === 'day')
            return nomeDiaCorrente();
        if(calendarioTipo === 'week')
            return nomeSemanaCorrente();
        if(calendarioTipo === 'month')
            return nomeMesCorrente();
    };
    
    return(
        <Container>
            <SubContainer>
                <Seletor>
                    <FaAngleLeft onClick={() =>setMomento(mesAnterior())}/>
                    <Corrente onClick={() => mesCorrente()}>Atual</Corrente>
                    <FaAngleRight onClick={() =>setMomento(mesProximo())}/>
                </Seletor>
                <DataHora>
                    {momentoTipo()}
                </DataHora>
            </SubContainer>
        </Container>
    );
}

export default SelecionarData;