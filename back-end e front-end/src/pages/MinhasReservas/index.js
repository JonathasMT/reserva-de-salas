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

    const titulos = Object.keys(data[0]);


    return(
    //   <Container>
    //     <SubContainer>
    //         <ContainerLista>
    //             <ContainerItem>

    //             </ContainerItem>
    //         </ContainerLista>
    //     </SubContainer>
    //   </Container>

    // <div className="App">
    //     <h1>MinhasReservas</h1>
    //     <Center V>
    //     <Table data={data} />
    //     </Center>
    // </div>
        <Container>
            <h1>MinhasReservas</h1>
            <table cellSpacing='1'>
                <thead>
                    <tr>
                        {titulos.map((titulo, i) => <th key={i}>{titulo}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((reserva, i) => (
                        <tr key={i}>
                        {titulos.map((titulo, i) => (
                            <td key={i}>{reserva[titulo]}</td>
                        ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default MinhasReservas;