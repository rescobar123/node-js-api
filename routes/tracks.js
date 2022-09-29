const expres = require("express");
const router = expres.Router();
const { validatorCreateItem, validatorGetItem } = require("../validator/tracks");
const customHeader = require("../middleware/customHeader");
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/checkRol');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
//TODO: http://localhost/tracks  get, post, delete put


/**
 * Gel all tracks
 * @openapi
 * /tracks:
 *      get: 
 *          tags:
 *              - tracks
 *          summary: "Listar tracks"
 *          description: "Listar todos los tracks guardados"
 *          security:
 *              - bearearAuth: []
 *          responses: 
 *              '200': 
 *                  description: "Retorn aobjeto de track"
 *                  content:
 *                  application/json:
 *                      schema: 
 *                          $ref: "#/components/schemas/track" 
 *              '403':
 *                  description: "Error obteniendo tracks"
*/
router.get("/", authMiddleware, customHeader, getItems);

router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem);//solo pueden hacer eso los usuarios que sean admin

/**
 * Gel all tracks
 * @openapi
 * /tracks/{id}:
 *      get: 
 *          tags:
 *              - tracks
 *          summary: "Listar tracks"
 *          description: "Listar todos los tracks guardados"
 *          security:
 *              - bearearAuth: []
 *          parameters:
 *              - name: id
 *                in: path
 *                description: Id de track a retornar
 *                required: true
 *                schema:
 *                  type: string
 *                  
 *          requestBody:
 *                    
 *          responses: 
 *              '200': 
 *                  description: "Retorn aobjeto de track"
 *                  content:
 *                  application/json:
 *                      schema: 
 *                          $ref: "#/components/schemas/track" 
 *              '403':
 *                  description: "Error obteniendo tracks"
*/
router.get("/:id", authMiddleware, validatorGetItem, getItem);

router.put("/:id", authMiddleware, validatorCreateItem, validatorGetItem, updateItem);

router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);



module.exports = router;