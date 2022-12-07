import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {
    ContainerFormulario,
    SubContainerFormulario,
    Formulario,
    Label,
    Input,
    Botao
    
} from '../../assets/styles';

import Carregamento from '../../components/Carregando';
import useAuth from '../../hooks/useAuth';


const ConfiguracaoInicial = () => {

    const navegar = useNavigate();
    const [carregando, setCarregando] = useState(false)
    const {listarInstituicao, atualizarInstituicao} = useAuth();

    const [instituicaoNome, setInstituicaoNome] = useState('');
    const [logo, setLogo] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const buscarInstituicao = async() => {
            setCarregando(true);
            const resposta = await listarInstituicao();
            setCarregando(false);
            if (!resposta.erro) {
                const {instituicao_nome} = resposta.instituicao;
                setInstituicaoNome(instituicao_nome);
            };
            if (resposta.erro) {
                alert(resposta.msg);
                return;
            };
            setCarregando(false);
        };
        buscarInstituicao();
    }, []);

    const submeterAtualizar = async() => {
        setCarregando(true);
        const resposta = await atualizarInstituicao(instituicaoNome, logo);
        setCarregando(false);
        if (!resposta.erro) {
            alert(resposta.msg);
        };
        if (resposta.erro) {
            setMsg(resposta.msg);
            return;
        };
    };

    return(
      <ContainerFormulario>
        {carregando && <Carregamento/>}
        <SubContainerFormulario>
            <Formulario>
                <h3>INSTITUIÇÃO</h3> 
                    <Label>Nome da instituição:</Label>
                    <Input
                        type='text'
                        name='nome'
                        placeholder='Digite o nome da sua instituição'
                        value={instituicaoNome}
                        onChange={(e) => setInstituicaoNome(e.target.value)}
                    />
                {/* <ContainerInput> 
                    Logo:
                    <InputImage
                        type='file'
                        name='logo'
                        placeholder='Selecione sua imagem de logo'

                    />
                </ContainerInput> */}
                <Botao
                    onClick={submeterAtualizar}
                    tipo={true}>
                        ATUALIZAR
                </Botao>
                <Botao
                    onClick={(e) => [e.preventDefault(), navegar(-1)]}>
                        CANCELAR
                </Botao>
                {msg}
            </Formulario>
        </SubContainerFormulario>
      </ContainerFormulario>
    );
};

export default ConfiguracaoInicial;