import {Container} from './styles';


const DetalhesReserva = () => {
    // const header = Object.keys(reserva[0]);

    return(
        <Container>
            <h2>Detalhes sobre esta reserva:</h2>
            {/* <table cellSpacing='1'>
                <tbody>
                    {header.map((heading, i) =>
                        <tr key={i}>
                            <th key={heading}>
                                {heading}
                            </th>
                            {reserva.map((r, i) => (
                                    <td key={i}>{r[heading]}</td>
                            ))}
                        </tr>
                    )}
                </tbody>
            </table> */}
        </Container>
    );
};

export default DetalhesReserva;