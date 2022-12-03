import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {Container, SubContainer} from './styles';
import useAuth from '../../hooks/useAuth';
import {BsPencilSquare, BsPersonDash} from 'react-icons/bs';
import Carregamento from '../../components/Carregando';


const MinhasReservas = () => {
    const titulos = ['Título', 'Descrição', 'Categoria', 'Grupo', 'Sala', 'Data', 'Início', 'Fim', 'Repetir', 'Opções'];
    const propriedades = ['titulo', 'descricao', 'categoria_id', 'grupo_id', 'sala_id', 'data', 'hora_inicio', 'hora_fim', 'repete_id', 'Opções'];

    const navegar = useNavigate();
    const [carregando, setCarregando] = useState(false)
    const {listarMinhasReservas} = useAuth();
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const buscarReservas = async() => {
            setCarregando(true);
            const resposta = await listarMinhasReservas();
            setCarregando(false);
            if (!resposta.erro) {
                setReservas(resposta.minhasReservas)
            };
            if (resposta.erro) {
                alert(resposta.msg);
                return;
            };
            setCarregando(false);
        };

        buscarReservas();
    }, []);

    return(
        <Container>
            <h2>MinhasReservas</h2>
            {/* {console.log(reservas[0].Categorium['titulo'])} */}
            <SubContainer>
                <table>
                    <thead>
                        <tr>
                            {titulos.map((titulo, i) => <th key={i}>{titulo}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map((reserva, r) => (
                            <tr key={r}>
                            {propriedades.map((p) => (
                                <td key={p}>
                                    {console.log(r)}
                                    {reserva[p]}
                                </td>
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </SubContainer>
        </Container>
    );
};

export default MinhasReservas;