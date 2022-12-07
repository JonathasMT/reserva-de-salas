import React from 'react';
import {Container, SubContainer, Grupo, Sala, InputSelect} from './styles';
import {FaAngleDown} from 'react-icons/fa';

function SelecionarSala() {
    return(
        <Container>
            <SubContainer>
                {/* <Grupo>
                    Salas de aula
                    <FaAngleDown/>
                </Grupo>
                <Sala>
                    Sala 04
                </Sala> */}
                <Grupo>
                    <InputSelect>
                    <option value='FaAngleDown'>Salas de aula <FaAngleDown/> </option>                        
                    <option value='2'>Salas de informática</option>
                    <option value='3'>Salas de reuniões</option>
                    </InputSelect>
                </Grupo>
                <Sala>
                    Sala 04
                </Sala>
            </SubContainer>
        </Container>
    );
}

export default SelecionarSala;