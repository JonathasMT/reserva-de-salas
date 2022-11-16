import React, {useState} from 'react';
import {
    Container,
    SubContainer,
    ContainerDia,
    Dia,
    ContainerSemana,
    Semana,
    ContainerMes,
    Mes,
    ContainerSemanaSelecionada,
    ContainerMesSelecionado,
    ContainerDiaSelecionado
} from './styles';

function SelecionarTipo() {
    const [selecionado, setSelecionado] = useState('mes');

    const DiaSelecionado = () => {
        return(
            <SubContainer>
                <ContainerDiaSelecionado>
                    <Dia>DIA</Dia>
                </ContainerDiaSelecionado>
                <ContainerSemana onClick={()=>clica('semana')}>
                    <Semana>SEMANA</Semana>
                </ContainerSemana>
                <ContainerMes onClick={()=>clica('mes')}>
                    <Mes>MÊS</Mes>
                </ContainerMes>
            </SubContainer>
        );
    };
    const SemanaSelecionada = () => {
        return(
            <SubContainer>
                <ContainerDia onClick={()=>clica('dia')}>
                    <Dia>DIA</Dia>
                </ContainerDia>
                <ContainerSemanaSelecionada>
                    <Semana>SEMANA</Semana>
                </ContainerSemanaSelecionada>
                <ContainerMes onClick={()=>clica('mes')}>
                    <Mes>MÊS</Mes>
                </ContainerMes>
            </SubContainer>
        );
    };
    const MesSelecionado = () => {
        return(
            <SubContainer>
                <ContainerDia onClick={()=>clica('dia')}>
                    <Dia>DIA</Dia>
                </ContainerDia>
                <ContainerSemana onClick={()=>clica('semana')}>
                    <Semana>SEMANA</Semana>
                </ContainerSemana>
                <ContainerMesSelecionado>
                    <Mes>MÊS</Mes>
                </ContainerMesSelecionado>
            </SubContainer>
        );
    };

    const clica = (valor) => {
        setSelecionado(valor);
    }

    // const BemVindo = () => {
    //     return (
    //         <Container>
    //             <SubContainer>
    //                 <h3>Bem Vindo ao Sistema Reserva Fácil</h3>
    //                 <p> 
    //                     Nada
    //                 </p>
    //                 <Button onClick={continuar}>VAMOS LÁ</Button>
    //             </SubContainer>
    //         </Container>
    //     );
    // };

    return(
        <Container selecionado={selecionado}>
            {selecionado === 'dia' ? <DiaSelecionado/> : selecionado === 'semana' ? <SemanaSelecionada/> : <MesSelecionado/>}
        </Container>
    );
}

export default SelecionarTipo;