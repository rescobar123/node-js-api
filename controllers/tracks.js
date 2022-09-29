const { matchedData, body } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const getItems = async (req, res) => {

    try {
        const user = req.user;
        const data = await tracksModel.find({})
        res.send({ data, user });

    } catch (error) {
        handleHttpError(res, 'ERROR EN GET ITEMS', 403);
    }

}

const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.findById(id)
        res.send({ data });
    }
    catch (error) {
        handleHttpError(res, 'ERROR EN GET Item', 403);
    }
}

const createItem = async (req, res) => {

    try {
        const body = matchedData(req);//limpia la data que viene y la deja como lo dejamos en el validador
        console.log(body);
        const data = await tracksModel.create(body);
        res.send({ algo: data })
    }
    catch (error) {
        handleHttpError(res, 'ERROR CREANDO ITEMS', 403);
    }

}

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req.body);//decimos que saque el id y lo que resta lo deje en el body de todo lo que tenga el req.body limpio
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );
        res.send({ algo: data })
    }
    catch (error) {
        handleHttpError(res, 'ERROR UPDATE ITEMS', 403);
    }
}

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.delete({ _id: id })//eliminado logico
        res.send({ data });
    }
    catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR dELETE Item', 403);
    }
}

const deleteItemFisico = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.deleteOne({ _id: id })//eliminado fisico
        res.send({ data });
    }
    catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR dELETE Item', 403);
    }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }