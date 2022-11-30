import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, Container, Form, BotaoFlutuante, ContainerInput, Input, SubContainer, ContainerSenhas} from './styles';
import useAuth from '../../hooks/useAuth';

import {
    BsPencilSquare
} from 'react-icons/bs';

const Perfil = () => {
    const {entrar, usuario} = useAuth();
    const navegar = useNavigate();

    console.log('USUARIO >>>'+usuario);

    // const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msg, setMsg] = useState('');
    const [desativado, setDesativado] = useState(true);


    const {nome, email} = JSON.parse(usuario);

    const submeterAtualizar = async() => {
      const resposta = await entrar(email, senha);
      if (resposta) {
        setMsg(resposta);
      }else {
        setMsg('Erro ao conectar com a API')
        return;
      };
      navegar('/');
    };

    return(
        <Container>
            <SubContainer>
                <Form>
                    <h3>Perfil</h3>
                    <BotaoFlutuante onClick={(e) => [e.preventDefault(), setDesativado(false)]}>
                        <BsPencilSquare/>
                    </BotaoFlutuante>
                    <ContainerInput> 
                        Nome:
                        <Input
                            type='nome'
                            name='nome'
                            placeholder='Digite seu nome completo'
                            defaultValue={nome}
                            disabled={desativado}
                            // onChange={(evento) => [setEmail(evento.target.value), setMsg('')]}
                        />
                    </ContainerInput>
                    <ContainerInput> 
                        E-mail:
                        <Input
                            type='email'
                            name='email'
                            placeholder='Digite seu e-mail'
                            defaultValue={email}
                            disabled={desativado}
                            // onChange={(evento) => [setEmail(evento.target.value), setMsg('')]}
                        />
                    </ContainerInput>
                    {
                        !desativado && 
                        <ContainerSenhas>
                            <p>Para alterar a sua senha preencha os campos a abaixo, senão deixe em branco.</p>
                            <ContainerInput>
                                Senha atual:
                                <Input
                                    type='password'
                                    name='senha'
                                    placeholder='Digite sua senha atual'
                                    value={senha}
                                    onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
                                />
                            </ContainerInput>
                            <ContainerInput>
                                Nova senha:
                                <Input
                                    type='password'
                                    name='senha'
                                    placeholder='Digite uma nova senha'
                                    value={senha}
                                    onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
                                />
                            </ContainerInput>
                            <ContainerInput>
                                Repita a nova senha:
                                <Input
                                    type='password'
                                    name='senha'
                                    placeholder='Repita a nova senha'
                                    value={senha}
                                    onChange={(evento) => [setSenha(evento.target.value), setMsg('')]}
                                />
                            </ContainerInput>
                            <Button
                                onClick={submeterAtualizar}
                                tipo={true}
                            >ATUALIZAR
                            </Button>
                            <Button
                                onClick={setDesativado(true)}
                                tipo={true}
                            >CANCELAR
                            </Button>
                        </ContainerSenhas>
                    }
                    <Button
                        onClick={(e) => [e.preventDefault(), navegar(-1)]}
                    >VOLTAR
                    </Button>
                    {msg}
                </Form>
            </SubContainer>
      </Container>
    );
};

export default Perfil;