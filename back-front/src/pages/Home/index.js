import {useEffect, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import Calendario from '../../components/Calendario';
import {Container} from './styles';

import useContexto from '../../hooks/useContexto';
import Loading from '../../components/Loading';


function Home() {

    const navegar = useNavigate();
    const location = useLocation();
    const {listarCategorias, listarReservas} = useContexto();

    const [loading, setLoading] = useState(false);
    const [reservas, setReservas] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const buscarCategorias = async() => {
            setLoading(true);
            const resposta = await listarCategorias();
            if (!resposta.erro) {
                if(resposta.categorias.length > 0) {
                    setCategorias(resposta.categorias);
                }else {
                    alert('Você deve cadastrar pelo menos uma categoria!');
                    navegar('/novacategoria');
                };
            }else {
                alert(resposta.msg);
            };
            return;
        };
        console.log('USE EFFECT');
        buscarCategorias();

        const buscarReservas = async() => {
            console.log('USE EFFECT - HOME 1');
            const resposta = await listarReservas();
            if (!resposta.erro) {
                setReservas(resposta.reservas);
            }else{
                alert(resposta.msg);
            };
            setLoading(false);
            return;
        };
        buscarReservas();
        console.log('USE EFFECT - HOME 2');
    }, []);

    return(
        loading ? <Loading/> :
        <Container>
            <Calendario categorias={categorias} reservas={reservas}/>
        </Container>
        
    )
}

export default Home