const baseDados = require('../connection');
const Grupo = require('../models/Grupo');

const msgErro = 'Ocorreu um erro, tente novamente ou contacte o administrador! ';

const create = async (req, res) => {
    try {
        await baseDados.sync();
        const {
            grupo_nome,
            descricao,
            dias_semana,
            hora_inicio,
            hora_fim,
            antecedencia_minima
        } = req.body;

        console.log(JSON.stringify(dias_semana));

        //criar o usuario com os dados recebidos
        await Grupo.create({
            grupo_nome: grupo_nome,
            descricao: descricao,
            dias_semana: dias_semana,
            hora_inicio: hora_inicio,
            hora_fim: hora_fim,
            antecedencia_minima: antecedencia_minima
        }).then((result) => {
            return res.status(200).json({erro: false, msg: 'Grupo cadastrado'});
        }).catch((erro) => {
            res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '});
        });
    } catch (_error) {
        console.log(erro);
        res.status(500).json({erro: true, msg: 'Ocorreu um erro, tente novamente ou contacte o administrador!'});
    };

};

const read = async (req, res) => {
    try {
        await baseDados.sync();
        const {grupo_id} = req.body
        //busca a instituição
        const grupo = await Grupo.findOne({where: {grupo_id: grupo_id}});
        //verifica se existe a instituição buscada
        console.log(grupo);
        if (!grupo) {
            return res.status(200).json({erro: true, msg: 'Grupo não encontrado!'});
        }else {
            return res.status(200).json({erro: false, msg: 'Sucesso', grupo: grupo})
        }
    } catch (error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

const readVarios = async (_req, res) => {
    await baseDados.sync();
    const grupos = await Grupo.findAll({ include: { all: true, nested: true }});
    return res.status(200).json({erro: false, msg: 'Sucesso', grupos: grupos})
};

const update = async (req, res) => {
    try {
        const {grupo_id} = req.body;
        await baseDados.sync();
        //busca a instituição
        const grupo = await Grupo.findOne({where: {grupo_id: grupo_id}});
        //verifica se existe a instituição buscada
        if (!grupo) {
            return res.status(200).json({erro: true, msg: 'Grupo não encontrado!'});
        };
        //seta o novo nome para a instituição
        grupo.grupo_nome = grupo_nome;
        //tenta salvar as modificações
        await grupo.save()
        .then((_result) => {
            return res.status(200).json({erro: false, msg: 'Grupo atualizado.', grupo: grupo})
        }).catch((_err) => {
            return res.status(200).json({erro: true, msg: 'Erro ao atualizar!'})
        });
    } catch (_err) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

module.exports = {
    create,
    read,
    readVarios,
    update
};