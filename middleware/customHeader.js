const customHeader = (req, res, next) => {
    try {
        const apikey = req.headers.api_key;
        if (apikey === 'rescobar') {
            //aca se pueden colocar mas validaciones, como si el usuario tuviera un consumo de algo
            //ya inicio sesion
            next();
        } else {
            res.status(403);
            res.send({ error: "Api key no definida" })
        }

    } catch (error) {
        res.status(403);
        res.send({ error: `Algo ocurrio en el custom header ${error}` })
    }
    console.log(req.headers);

}

module.exports = customHeader;