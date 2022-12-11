import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';

import {ContainerTabela, SubContainerTabela, BotaoTabela, ContainerTituloTabela} from '../../assets/styles';

import useContexto from '../../hooks/useContexto';
import Loading from '../../components/Loading';

import {BiEdit, BiPlus} from 'react-icons/bi';
import {BsPencilSquare, BsPersonDash} from 'react-icons/bs';


const MinhasReservas = () => {
    moment.locale('pt-br');

    const navegar = useNavigate();
    const [loading, setLoading] = useState(true);
    const {listarUsuarios} = useContexto();
    const [usuarios, setUsuarios] = useState([]);

    const titulos = ['Título', 'Descrição', 'Categoria',  'Sala', 'Grupo','Data', 'Início', 'Fim', 'Recorrência', 'Opções'];
    const propriedades = ['titulo', 'descricao', 'categoria_id', 'sala_id', 'grupo_id', 'data', 'hora_inicio', 'hora_fim', 'recorrencia_id', 'opcoes'];

    const {listarMinhasReservas} = useContexto();
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const buscarReservas = async() => {
            const resposta = await listarMinhasReservas();
            if (!resposta.erro) {
                setReservas(resposta.minhasReservas)
                console.log(resposta.minhasReservas);
            };
            if (resposta.erro) {
                alert(resposta.msg);
            };
            setLoading(false);
            return;
        };
        buscarReservas();
    }, []);


    function renderiza(reserva, p) {
        var d;
        switch (p) {
            case 'categoria_id':
                const {Categorium} = reserva;
                return(Categorium.categoria_nome);
            case 'sala_id':
                const {Sala} = reserva;
                return(Sala.sala_nome);
            case 'grupo_id':
                const {grupo_nome} = reserva.Sala.Grupo;
               return(grupo_nome);
            case 'data':
                d = (moment(reserva[p]).format('DD/MM/YYYY'));
            return d;
            case 'recorrencia_id':
                const {recorrencia_id} = reserva;
                if(!recorrencia_id){
                    return('Não');
                };
            case 'opcoes':
                return (
                    <BsPencilSquare
                        title='Editar esta reserva'
                        onClick={(e) => [
                            e.preventDefault(),
                            navegar('/editarreserva', {state: {reservaId: reserva.reserva_id}})
                        ]}
                    />
                );
            default:
                return reserva[p]
        };
    };


    return(
        loading ? <Loading/> :
        <ContainerTabela>
            <h2>MINHAS RESERVAS</h2>
            <SubContainerTabela>
                <table>
                    <thead>
                        <tr>
                            {titulos.map((titulo, i) => <th key={i}>{titulo}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map((reserva, i) => (
                            <tr key={i}>
                            {propriedades.map((p) => (
                                <td key={p}>
                                    {renderiza(reserva, p)}
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