import {Container} from './styles';

import {usuarios} from "../../assets/import/bancoFake";

const Usuarios = () => {

    const header = Object.keys(usuarios[0]);
    console.log('NOMES >>'+header)


    return(
        <Container>
            <h1>Usuários</h1>
            <table cellSpacing='1'>
                <thead>
                    <tr>
                        {header.map((nome, i) => <th key={i}>{nome}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i) => (
                        <tr key={i}>
                        {header.map((nome, i) => (
                            <td key={i}>{usuario[nome]}</td>
                        ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default Usuarios;