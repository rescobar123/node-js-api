const bcryptjs = require("bcryptjs")


/**
 * Contraseña sin encriptar
 * @param {*} passwordPlain 
 * El "10" es que tan random sera tu hash
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash;
};
/**
 * Pasar contraseña plana y contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare }; 