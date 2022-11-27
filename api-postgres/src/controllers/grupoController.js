const dataBase = require('../connection');
const Grupo = require('../models/Grupo');

const create = async (req, res) => {
    await dataBase.sync();
    const {
        titulo,
        descricao,
        diasSemana,
        horaInicio,
        horaFim,
        tempoAntecedencia
    } = req.body;

    console.log(JSON.stringify(diasSemana));

    //criar o usuario com os dados recebidos
    await Grupo.create({
        titulo: titulo,
        descricao: descricao,
        dias_semana: diasSemana,
        hora_inicio: horaInicio,
        hora_fim: horaFim,
        tempo_antecedencia: tempoAntecedencia
    }).then((result) => {
        return res.status(200).json('Grupo cadastrado');
    }).catch((erro) => {
        res.status(500).json({msg: 'Ocorreu um erro, tente novamente ou contacte o administrador! '+erro});
    });
};

const read = async (req, res) => {
    try {
        await dataBase.sync();

        const {grupoId} = req.body

        //busca a instituição
        const grupo = await Grupo.findOne({where: {grupo_id: grupoId}});
        //verifica se existe a instituição buscada
        if (!grupo) {
            return res.status(200).json({erro: true, msg: 'Grupo não encontrada!'});
        }else {
            return res.status(200).json({erro: false, msg: grupo})
        }
    } catch (error) {
        return res.status(500).json({erro: true, msg: msgErro})
    }
};

const readVarios = async (_req, res) => {
    await dataBase.sync();
    const grupos = await Grupo.findAll();
    console.log(grupos)
    return res.status(200).json({erro: false, msg: 'Sucesso', grupos: grupos})
};

const update = async (req, res) => {
    try {
        const {grupoId} = req.body;
        await dataBase.sync();
        //busca a instituição
        const grupo = await Grupo.findOne({where: {grupo_id: GrupoId}});
        //verifica se existe a instituição buscada
        if (!grupo) {
            return res.status(200).json({erro: true, msg: 'Grupo não encontrado!'});
        };
        //seta o novo nome para a instituição
        grupo.titulo = titulo;
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