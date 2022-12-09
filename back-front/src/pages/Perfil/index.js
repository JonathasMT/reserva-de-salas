import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    ContainerSenhas,
    Label,
    Input,
    Botao,
    BotaoFlutuante,
    InputCheckbox,
    SubContainerCheckBox
} from '../../assets/styles';

import {BsPencilSquare} from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/Loading';


const Perfil = () => {

    const [loading, setLoading] = useState(false);
    const {listarPerfil, atualizarPerfil, usuario} = useAuth();
    const navegar = useNavigate();

    const [nome, setNome] = useState('');
    const [mail, setMail] = useState();
    const [senha, setSenha] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmaNovaSenha, setConfirmaNovaSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [desativado, setDesativado] = useState(true);
    const [alterarSenha, setAlterarSenha] = useState(false);

    useEffect(() => {
        const {usuario_nome, email} = JSON.parse(usuario);
        setNome(usuario_nome);
        setMail(email);
        const buscarPerfil = async() => {
            setLoading(true);
            const resposta = await listarPerfil();
            setLoading(false);
            if(resposta.erro) {
                alert(resposta.msg);
                navegar(-1)
                return;
            };
        };

        buscarPerfil();
    }, []);

    const submeterAtualizar = async() => {
        setLoading(true);
        const dados = {
            usuario_nome: nome,
            email: mail,
            alterar_senha: alterarSenha,
            senha,
            nova_senha: novaSenha,
            confirma_nova_senha: confirmaNovaSenha
        };
        const resposta = await atualizarPerfil(dados);
        setLoading(false);
        if (!resposta.erro) {
            alert(resposta.msg);
            navegar(-1);
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    };

    const aoMudar = (e) => {
        const {checked} = e.target;
        setAlterarSenha(checked);
    };

    return(
        loading ?  <Loading/> :
        <ContainerFormulario>
            <SubContainerFormulario>
                <Formulario onSubmit={submeterAtualizar}>
                    <h3>PERFIL</h3>
                    <BotaoFlutuante title='Editar perfil' onClick={(e) => [e.preventDefault(), setDesativado(false)]}>
                        <BsPencilSquare/>
                    </BotaoFlutuante>
                    <Label>Nome:</Label>
                    <Input
                        type='nome'
                        name='nome'
                        placeholder='Usuário não encontrado!'
                        required
                        value={nome}
                        disabled={desativado}
                        onChange={(evento) => [setNome(evento.target.value), setMsg('')]}
                    />
                    <Label>E-mail:</Label>
                    <Input
                        type='email'
                        name='email'
                        placeholder='E-mail não encontrado!'
                        required
                        value={mail}
                        disabled={desativado}
                        onChange={(evento) => [setMail(evento.target.value), setMsg('')]}
                    />
                    {
                        !desativado && 
                        <ContainerSenhas>
                                <SubContainerCheckBox>
                                    Alterar senha
                                    <InputCheckbox
                                        value='1'
                                        onChange={aoMudar}/>
                                </SubContainerCheckBox>
                            <Label>Senha atual:</Label>
                            <Input
                                type='password'
                                name='senha'
                                placeholder='Digite sua senha atual'
                                disabled={!alterarSenha}
                                value={senha}
                                onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
                            />
                            <Label>Nova senha:</Label>
                            <Input
                                type='password'
                                name='senha'
                                placeholder='Digite uma nova senha'
                                disabled={!alterarSenha}
                                value={novaSenha}
                                onChange={(evento) => [setNovaSenha(evento.target.value), setMsg('')]}
                            />
                            <Label>Repita a nova senha:</Label>
                            <Input
                                type='password'
                                name='senha'
                                placeholder='Repita a nova senha'
                                disabled={!alterarSenha}
                                value={confirmaNovaSenha}
                                onChange={(evento) => [setConfirmaNovaSenha(evento.target.value), setMsg('')]}
                            />
                            {console.log(!alterarSenha)}
                            <Botao type='submit' tipo={true}>
                                ATUALIZAR
                            </Botao>
                        </ContainerSenhas>
                    }
                    <Botao onClick={(e) => [e.preventDefault(), desativado? navegar(-1) : setDesativado(true)]}>
                        {desativado? 'VOLTAR': 'CANCELAR'}
                    </Botao>
                    {msg}
                </Formulario>
            </SubContainerFormulario>
      </ContainerFormulario>
    );
};

export default Perfil;