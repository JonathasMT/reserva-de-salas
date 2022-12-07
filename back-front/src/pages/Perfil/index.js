import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    ContainerSenhas,
    Label,
    Input,
    Botao,
    BotaoFlutuante
} from '../../assets/styles';

import {BsPencilSquare} from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';

const Perfil = () => {
    const {editarPerfil, usuario} = useAuth();
    const navegar = useNavigate();

    console.log('USUARIO >>>'+usuario);

   const {usuario_nome, email} = JSON.parse(usuario);

    const [nome, setNome] = useState(usuario_nome);
    const [mail, setMail] = useState(email);
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [desativado, setDesativado] = useState(true);

 

    const submeterAtualizar = async() => {
      const resposta = await editarPerfil(email, senha);
      if (resposta) {
        setMsg(resposta);
      }else {
        setMsg('Erro ao conectar com a API')
        return;
      };
      navegar('/');
    };

    return(
        <ContainerFormulario>
            <SubContainerFormulario>
                <Formulario>
                    <h3>Perfil</h3>
                    <BotaoFlutuante title='Editar perfil' onClick={(e) => [e.preventDefault(), setDesativado(false)]}>
                        <BsPencilSquare/>
                    </BotaoFlutuante>
                        <Label>Nome:</Label>
                        <Input
                            type='nome'
                            name='nome'
                            placeholder='Digite seu nome completo'
                            value={nome}
                            disabled={desativado}
                            onChange={(evento) => [setMail(evento.target.value), setMsg('')]}
                        />
                        <Label>E-mail:</Label>
                        <Input
                            type='email'
                            name='email'
                            placeholder='Digite seu e-mail'
                            value={email}
                            disabled={desativado}
                            onChange={(evento) => [setMail(evento.target.value), setMsg('')]}
                        />
                        {
                            !desativado && 
                            <ContainerSenhas>
                                <p>Para alterar a sua senha preencha os campos a abaixo, senão deixe em branco.</p>
                                    <Label>Senha atual:</Label>
                                    <Input
                                        type='password'
                                        name='senha'
                                        placeholder='Digite sua senha atual'
                                        value={senha}
                                        onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
                                    />
                                    <Label>Nova senha:</Label>
                                    <Input
                                        type='password'
                                        name='senha'
                                        placeholder='Digite uma nova senha'
                                        value={senha}
                                        onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
                                    />
                                    <Label>Repita a nova senha:</Label>
                                    <Input
                                        type='password'
                                        name='senha'
                                        placeholder='Repita a nova senha'
                                        value={senha}
                                        onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
                                    />
                                <Botao onClick={submeterAtualizar} tipo={true}>
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