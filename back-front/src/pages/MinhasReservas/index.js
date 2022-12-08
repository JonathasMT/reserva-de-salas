import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { ContainerTabela, SubContainerTabela } from '../../assets/styles';

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


    function renderiza(v, p, r) {
        if(p==='categoria_id') {
            const {Categorium} = reservas[r];
            return(Categorium.categoria_nome);
        };
        if(p==='sala_id') {
            const {Sala} = reservas[r];
            return(Sala.sala_nome);
        };
        return v[p]
    }

console.log(reservas);

    return(
        carregando ? <Carregamento/> :
        <ContainerTabela>
            <h2>MINHAS RESERVAS</h2>
            {/* {console.log(reservas[0].Categorium['titulo'])} */}
            <SubContainerTabela>
                <table>
                    <thead>
                        <tr>
                            {titulos.map((titulo, i) => <th key={i}>{titulo}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {console.log('RESERVAS')}
                        {console.log(reservas[0]?'SIM':'NÃO')}
                        {reservas.map((reserva, r) => (
                            <tr key={r}>
                            {propriedades.map((p) => (
                                <td key={p}>
                                    {renderiza(reserva, p, r)}
                                </td>
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </SubContainerTabela>
        </ContainerTabela>
    );
};

export default MinhasReservas;