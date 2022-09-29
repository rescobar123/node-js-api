const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            select: false
        },
        role: {
            type: ["user", "admin"],
            default: "user",
        }
    },
    {
        timestamps: true, //createdAt, updateAt
        versionKey: false
    }
);

module.exports = mongoose.model("users", UserSchema)//nombreColeccion, Schema
