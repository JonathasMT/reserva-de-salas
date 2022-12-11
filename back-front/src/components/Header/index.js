import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

import {
    Container,
    ContainerInstituicao,
    Titulo,
    SubTitulo,
    SubContainerInstituicao
} from './styles';
import Menu from '../Menu';
import logo from '../../assets/img/logo.png';
import useContexto from '../../hooks/useContexto';

const Header = () => {
    const {menu, alterarMenu} = useContexto();

    const [nome, setNome] = useState('Instituição não encontrada');
    const usuario = localStorage.getItem('usuarioAutenticado');
    const instituicao = localStorage.getItem('instituicao');

    useEffect(() => {
        
        if(instituicao) {
            const {instituicao_nome} = JSON.parse(instituicao);
            if(instituicao_nome) {
                setNome(instituicao_nome);
            };
        };
        }, []);

    const mostrarMenu = (e) => {
        e.preventDefault();
        alterarMenu();
    };

    return(
            (usuario && instituicao) && (
                <Container>
                    <FaBars onClick={mostrarMenu}/>
                    {menu && <Menu/>}
                    <NavLink to='/'>
                        <ContainerInstituicao>
                            <img src={logo} alt='Instituiçao' />
                            <SubContainerInstituicao>
                                <Titulo>{nome}</Titulo>
                                <SubTitulo>Reserva de salas</SubTitulo>
                            </SubContainerInstituicao>
                        </ContainerInstituicao>
                    </NavLink>
                </Container>
            )
    )
}

export default Header;
