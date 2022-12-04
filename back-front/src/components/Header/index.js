import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

import {Container, ContainerInstituicao, Titulo, SubTitulo, SubContainerInstituicao} from './styles';
import Menu from '../Menu';
import logo from '../../assets/img/logo.png';
import useAuth from '../../hooks/useAuth';
import useContexto from '../../hooks/useContexto';


const Header = () => {
    console.log('Passou no arquivo Header.js');
    const {usuario, instituicao} = useAuth();
    const {menu, alterarMenu} = useContexto();

    const [nome, setNome] = useState('Não encontrada');

    useEffect(() => {
        console.log(instituicao);
        if(instituicao) {
            const {instituicao_nome} = JSON.parse(instituicao);
            if(instituicao_nome) {
                setNome(instituicao_nome);
            };
        }

        }, []);

    const mostrarMenu = (e) => {
        e.preventDefault();
        alterarMenu();
    };

    return(
        <>  
            {usuario && (
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
            )}
        </>
    )
}

export default Header;
