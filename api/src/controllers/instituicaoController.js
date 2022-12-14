const baseDados = require('../connection');
const Instituicao = require('../models/Instituicao');

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';

const read = async (req, res) => {
    try {
        await baseDados.sync();
        //busca a instituição
        const instituicao = await Instituicao.findOne({where: {instituicao_id: 1}});
        //verifica se existe a instituição buscada
        console.log(instituicao);
        if (!instituicao) {
            return res.status(200).json({erro: true, msg: 'Instituição não encontrada!'});
        }else {
            return res.status(200).json({erro: false, msg: 'Sucesso', instituicao: instituicao})
        }
    } catch (error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

const update = async (req, res) => {
    try {
        const {instituicao, instituicao_nome} = req.body;
        //seta o novo nome para a instituição
        instituicao.nome_instituicao = instituicao_nome;
        //tenta salvar as modificações
        await instituicao.save()
        .then((_result) => {
            return res.status(200).json({erro: false, msg: 'Instituição atualizada.', instituicao: instituicao})
        }).catch((_err) => {
            return res.status(200).json({erro: true, msg: 'Erro ao atualizar!'})
        });
    } catch (_error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

module.exports = {
    read,
    update
};