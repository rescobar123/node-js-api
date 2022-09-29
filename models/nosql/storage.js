const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timestamps:true, //createdAt, updateAt
        versionKey: false
    }
);

module.exports = mongoose.model("storage", StoreSchema)//nombreColeccion, Schema
