const express = require("express");
const { createItem } = require("../controllers/storage");
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');


//HTTP://localhost:3003/storage
/**
 * Upload file
 * @openapi
 * /storage:
 *      post: 
 *          tags:
 *              - storage
 *          summary: "Subir Archivo"
 *          description: "Subir un archio"
 *          security:
 *              - bearearAuth: []
 *          requestBody:
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              myfile:
 *                                  type: string
 *                                  format: binary
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
 * */
router.post("/", uploadMiddleware.single("myfile"), createItem) //como es un solo archivo enviamos .signle, si fuesen varios se usarian .multi

module.exports = router;
