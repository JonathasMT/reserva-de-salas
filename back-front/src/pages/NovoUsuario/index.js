import {useEffect, useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import Loading from '../../components/Loading';
import useContexto from '../../hooks/useContexto';

import {Botao, ContainerFormulario, Formulario, Input, InputSelect, Label, SubContainerFormulario} from '../../assets/styles';

const NovoUsuario = () => {

    const navegar = useNavigate();
    const {novoUsuario} = useContexto();

    const [loading, setLoading] = useState(false);
    const [usuarioNome, setUsuarioNome] = useState('');
    const [email, setEmail] = useState('');
    const [nivel, setNivel] = useState(1);
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [msg, setMsg] = useState('');

    const aoSubmeter = async (e) => {
        e.preventDefault();
        setLoading(true);
        const dados = {
            usuario_nome: usuarioNome,
            email,
            nivel,
            senha,
            confirma_senha: confirmaSenha
        };
        console.log(dados);
        const resposta = await novoUsuario(dados);
        if (!resposta.erro) {
            alert(resposta.msg);
            navegar(-1)
        }else {
            setMsg(resposta.msg);
        };
        setLoading(false);
        return;
    };

    return(
        loading ? <Loading/> :
        <ContainerFormulario>
            <SubContainerFormulario>
                <Formulario onSubmit={aoSubmeter}>
                    <h3>NOVO USUÁRIO</h3>
                        {/* <Label>Imagem de perfil:</Label>
                        <InputImage
                            type='text'
                            name='nome'
                            placeholder='Selecione sua imagem de perfil'
                        /> */}
                        <Label>Nome:</Label>
                        <Input
                            type='text'
                            name='nome'
                            placeholder='Digite seu nome completo'
                            required
                            value={usuarioNome}
                            onChange={(e) => [setUsuarioNome(e.target.value), setMsg('')]}
                        />
                        <Label>E-mail:</Label>
                        <Input
                            type='email'
                            name='email'
                            placeholder='Digite seu e-mail'
                            required
                            value={email}
                            onChange={(e) => [setEmail(e.target.value), setMsg('')]}
                        />
                        <Label>Nível de permissão:</Label>
                        <InputSelect
                            required
                            value={nivel}
                            onChange={(e) => setNivel(parseInt(e.target.value))}>
                            <option value='1'>usuario</option>
                            <option value='2'>administrador</option>
                        </InputSelect>
                        <Label>Senha:</Label>
                        <Input
                            type='password'
                            name='senha'
                            placeholder='Digite uma senha'
                            required
                            value={senha}
                            onChange={(e) => [setSenha(e.target.value), setMsg('')]}
                        />
                        <Label>Repita a senha:</Label>
                        <Input
                            type='password'
                            name='confirmaSenha'
                            placeholder='Repita a senha'
                            required
                            value={confirmaSenha}
                            onChange={(e) => [setConfirmaSenha(e.target.value), setMsg('')]}
                        />
                        <Botao tipo={true} type='submit'>
                            CADASTRAR
                        </Botao>
                        <Botao onClick={(e) => [e.preventDefault(), navegar(-1)]}>
                            CANCELAR
                        </Botao>
                </Formulario>
                <p>{msg}</p>
            </SubContainerFormulario>
        </ContainerFormulario>
    );
};

export default NovoUsuario;