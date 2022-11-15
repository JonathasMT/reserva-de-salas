import {Container} from './styles';

import {reservas} from "../../assets/import/bancoFake";

const MinhasReservas = () => {
    const titulos = Object.keys(reservas[0]);

    return(
        <Container>
            <h2>MinhasReservas</h2>
            <table cellSpacing='1'>
                <thead>
                    <tr>
                        {titulos.map((titulo, i) => <th key={i}>{titulo}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva, i) => (
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