import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    Label,
    Input,
    InputCor,
    Botao
} from '../../assets/styles';

import Carregamento from '../../components/Carregando';
import useAuth from '../../hooks/useAuth';


const NovaCategoria = () => {

    const navegar = useNavigate();
    const {novaCategoria} = useAuth();

    const [carregando, setCarregando] = useState(false);
    const [categoriaNome, setCategoriaNome] = useState('');
    const [cor, setCor] = useState('#3DEB65');
    const [msg, setMsg] = useState('');

    const submeterCadastrar = async() => {
        setCarregando(true);
        const dados = {
            categoria_nome:  categoriaNome,
            cor
        }
        const resposta = await novaCategoria(dados);
        setCarregando(false);
        if (!resposta.erro) {
            alert(resposta.msg);
            navegar(-1);
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };

    };


    return(
      <ContainerFormulario>
        {
            carregando ? <Carregamento/>:
            <SubContainerFormulario>
                <Formulario>
                    <h3>NOVA CATEGORIA DE RESERVAS</h3>
                        <Label>Título:</Label>
                        <Input
                            type='text'
                            placeholder='Digite um nome para a categoria'
                            name={categoriaNome}
                            value={categoriaNome}
                            onChange={(e) => setCategoriaNome(e.target.value)}
                        />
                        <Label>Cor:</Label>
                        <InputCor
                            type='color'
                            placeholder='Selecione a cor'
                            name={cor}
                            value={cor}
                            onChange={(e) => setCor(e.target.value)}
                        />
                    <Botao onClick={submeterCadastrar} tipo={true}>
                        CADASTRAR
                    </Botao>
                    <Botao onClick={(e) => [e.preventDefault(), navegar(-1)]}>
                        CANCELAR
                    </Botao>
                </Formulario>
                {msg}
            </SubContainerFormulario>
        }
      </ContainerFormulario>
    );
};

export default NovaCategoria;