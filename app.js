require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const morganBody = require("morgan-body");
const openApiConfig = require('./docs/swagger');
const loggerStream = require('./utils/handleLogger');


const dbConnect = require('./config/mongo');
const app = express();
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json()); //esto es para que este preparado para recibir
app.use(express.static("storage")); //le decimos que que esta en la carpeta storage
const port = process.env.PORT || 3000;

morganBody(app, {
    noColors: true,
    stream: loggerStream,
    skip: function (req, res) {
        return res.statusCode < 400; //si esta en los 200 o 300 los va a omitir para los logs que se envian a slack
    }
});
/**
 * Definir ruta de documentacion
 */
app.use('/documentation',
    swaggerUI.serve,
    swaggerUI.setup(openApiConfig));


/**
 * Aqui invocamos las turas!
 */
//TODO localhost/api/____
app.use("/api", require("./routes"));

if (NODE_ENV !== 'test') { //esto es para que solo se ejecutan las pruebas si el NODE_ENV es test, revisar el package json en scripts
    app.listen(port, () => {
        console.log(`Tu app esta lista por htt://localhost:${port}`);
    })
}


dbConnect();

module.exports = app