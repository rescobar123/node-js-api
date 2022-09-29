const request = require("supertest")
const app = require('../app')
const { userModel } = require('../models')
const mongoose = require("mongoose")

const testAuthLogin = {
    email: "jua@juan.com",
    password: "juan"
}

const testAuthRegister = {
    name: "aloalo",
    email: "aloal33sso1d@mail.com",
    age: 34,
    password: "aloalo"
}

beforeAll(async () => {
    await userModel.deleteMany()
});


describe("[AUHT] esta es la prueba de /api/auth", () => {
    test("Esto deberia de retornar un 404", async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send(testAuthLogin);
        expect(response.statusCode).toEqual(404);
    });

    test("Esto deberia de retornar un 200", async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send(testAuthRegister);
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("data.token");
        expect(response.body).toHaveProperty("data.data.role");
    });
});

afterAll(() => {
    mongoose.connection.close();
})

