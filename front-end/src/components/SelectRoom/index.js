import React from "react";
import { Container, SubContainer, Group, Room } from './styles';
import { FaAngleDown } from "react-icons/fa";

function SelectRoom() {
    return(
        <Container>
            <SubContainer>
                <Group>
                    Salas de aula
                    <FaAngleDown/>
                </Group>
                <Room>
                    Sala 04
                </Room>
            </SubContainer>
        </Container>
    );
}

export default SelectRoom;