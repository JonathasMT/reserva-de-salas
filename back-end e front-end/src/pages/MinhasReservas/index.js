import {
    Button,
    Container,
    ContainerInput,
    Input,
    SubContainer,
    InputTextArea,
    ContainerHora,
    Select,
    ContainerLista,
    ContainerItem} from './styles';

import Table from "../../assets/import/Table";
import {data} from "../../assets/import/data";
import {Center} from "../../assets/import/Center";

const MinhasReservas = () => {


    return(
    //   <Container>
    //     <SubContainer>
    //         <ContainerLista>
    //             <ContainerItem>

    //             </ContainerItem>
    //         </ContainerLista>
    //     </SubContainer>
    //   </Container>
    <div className="App">
        <h1>MinhasReservas</h1>
        <Center V H>
        <Table data={data} />
        </Center>
    </div>
    );
};

export default MinhasReservas;