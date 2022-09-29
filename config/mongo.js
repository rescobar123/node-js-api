require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = ()=> {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if(!err){
            console.log("Conexion correcta");
        }else{
            console.log("Error de conexion");
        }
    });
};

module.exports = dbConnect