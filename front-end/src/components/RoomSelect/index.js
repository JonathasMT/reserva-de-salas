import React, { useEffect } from "react";
import axios from 'axios';
import { Container, GroupSelector, SubContainer } from './styles';
import { FaAngleDown } from "react-icons/fa";

function RoomSelector() {
    useEffect(async() => {
        axios.post('http://10.30.0.213:8080/usuario/cadastrar', 
        {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
    }, [])

    return(
        <Container>
            <SubContainer>
                {/* <GroupSelector>
                    Salas de aula
                    <FaAngleDown/>
                </GroupSelector> */}
            </SubContainer>
        </Container>
    );
}

export default RoomSelector;