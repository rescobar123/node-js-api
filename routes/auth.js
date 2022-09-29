const expres = require("express");
const router = expres.Router();
const { registerController, loginController } = require('../controllers/auth')
const { validatorRegister, validatorLogin } = require('../validator/auth');


/**
 * Route register new user
 * @openapi
 * /auth/register:
 *      post: 
 *          tags:
 *              - auth
 *          summary: "Registrar nuevo usuario"
 *          description: "Esta ruta es para registrar un nuevo usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: "#/components/schemas/authRegister"         
 *          responses: 
 *              '200':
 *                  description: "Usuario registrado de manera correcta"
 *              '403':
 *                  description: "Error por validacion de usuario"
*/


//TODO: http://localhost/apit/auth/register
router.post("/register", validatorRegister, registerController);

/**
 * Route register new user
 * @openapi
 * /auth/login:
 *      post: 
 *          tags:
 *              - auth
 *          summary: "Realizar login"
 *          description: "Esta ruta es para crear sesion en la app"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: "#/components/schemas/authLogin"         
 *          responses: 
 *              '200':
 *                  description: "Usuario registrado de manera correcta"
 *              '403':
 *                  description: "Error por validacion de usuario"
*/
//TODO: http://localhost/apit/auth/login
router.post("/login", validatorLogin, loginController);


module.exports = router;