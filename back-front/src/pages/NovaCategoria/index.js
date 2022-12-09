import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    Label,
    Input,
    InputCor,
    Botao,
    InputArea
} from '../../assets/styles';

import Loading from '../../components/Loading';
import useAuth from '../../hooks/useAuth';


const NovaCategoria = () => {
    
    const navegar = useNavigate();
    const {novaCategoria} = useAuth();

    const [loading, setLoading] = useState(false);
    const [categoriaNome, setCategoriaNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [cor, setCor] = useState('#3DEB65');
    const [msg, setMsg] = useState('');

    const aoSubmeter = async() => {
        setLoading(true);
        const dados = {
            categoria_nome:  categoriaNome,
            descricao,
            cor
        };
        const resposta = await novaCategoria(dados);
        setLoading(false);
        if (!resposta.erro) {
            alert(resposta.msg);
            navegar('/configuracoes');
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    };


    return(
        loading ? <Loading/>:
            <ContainerFormulario>
                    <SubContainerFormulario>
                        <Formulario onSubmit={aoSubmeter}>
                            <h3>NOVA CATEGORIA DE RESERVAS</h3>
                            <Label>Nome da categoria:</Label>
                            <Input
                                type='text'
                                placeholder='Digite um nome para esta categoria'
                                required
                                name={categoriaNome}
                                value={categoriaNome}
                                onChange={(e) => setCategoriaNome(e.target.value)}
                            />
                            <Label>Descrição:</Label>
                            <InputArea
                                type='text'
                                placeholder='Digite uma descrição pra esta categoria.'
                                name={descricao}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                            <Label>Cor:</Label>
                            <InputCor
                                type='color'
                                placeholder='Selecione a cor'
                                required
                                name={cor}
                                value={cor}
                                onChange={(e) => setCor(e.target.value)}
                            />
                            <Botao tipo={true} type='submit'>
                                CADASTRAR
                            </Botao>
                            <Botao onClick={(e) => [e.preventDefault(), navegar(-1)]}>
                                CANCELAR
                            </Botao>
                        </Formulario>
                        {msg}
                    </SubContainerFormulario>
            </ContainerFormulario>
    );
};

export default NovaCategoria;