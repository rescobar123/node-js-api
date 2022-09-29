const { handleHttpError } = require('../utils/handleError')

/**
 * Array con los roles permitidos
 * @param {*} roles 
 * @returns 
 */

const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;//el usuario ya estaba inyecto en el req, lo inyecto el middleware de sesion
        const rolesByUser = user.role;

        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));//devueve true o false, esto es como hacer un for a roles que pide el chequeo con los roles que tiene el usuario

        if (!checkValueRol) {
            handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
            return;
        }
        next();
    }
    catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_PERMISSIONS", 403)

    }


}

module.exports = checkRol;