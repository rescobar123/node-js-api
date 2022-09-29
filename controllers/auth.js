const { matchedData } = require("express-validator");
const { encrypt, compare } = require('../utils/handlePassword')
const { tokenSing } = require('../utils/handleJwt');
const { handleHttpError } = require('../utils/handleError')
const { userModel } = require('../models');

/**
 * Este controlador es el encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerController = async (req, res) => {
    try {

        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = { ...req, password }
        const dataUser = await userModel.create(body);
        dataUser.set('password', undefined, { strict: false });

        const data = {
            token: await tokenSing(dataUser),
            data: dataUser
        }
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_REGISTER_USER");
    }
}

/** Este controlador es el encargado de loguear a una persona */
const loginController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await userModel.findOne({ email: req.email }).select('password name role email');
        if (!user) {
            handleHttpError(res, "USERS_NOT_EXISTS", 404);
            return;
        }
        const hassPassword = user.get('password');
        const check = await compare(req.password, hassPassword);
        if (!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401);
        }
        user.set('password', undefined, { strict: false })
        const data = {
            token: await tokenSing(user),
            user
        }
        res.send(data);
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_LOGIN_USER");
    }
}

module.exports = { loginController, registerController }