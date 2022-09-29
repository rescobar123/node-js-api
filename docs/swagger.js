const swaggerJsdoc = require("swagger-jsdoc");

/**
 * Opciones
 */
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:3003/api",
                name: "Desarrollo"
            },
            {
                url: "http://localhost:3002/api",
                name: "Tester"
            },
        ],
        components: {
            securitySchemes: {
                bearearAuth: {
                    type: "http",
                    scheme: "bearer"
                }
            },
            schemas: {
                authLogin: {
                    type: "object",
                    required: ["email", "password"],
                    properties: {
                        email: {
                            type: "string"
                        },
                        password: {
                            type: "string"
                        }
                    }

                },
                authRegister: {
                    type: "object",
                    required: ["email", "password", "age", "name"],
                    properties: {
                        name: {
                            type: "string"
                        },
                        email: {
                            type: "string"
                        },
                        age: {
                            type: "integer"
                        },
                        password: {
                            type: "string"
                        }
                    }
                },
                track: {
                    type: "object",
                    required: ["name", "album", "mediaId"],
                    properties: {
                        name: {
                            type: "string"
                        },
                        album: {
                            type: "string"
                        },
                        cover: {
                            type: "string"
                        },
                        artist: {
                            type: "Object",
                            properties: {
                                name: {
                                    type: "string"
                                },
                                nickname: {
                                    type: "string"
                                },
                                nationality: {
                                    type: "string"
                                }
                            }
                        },
                        duration: {
                            type: "Object",
                            properties: {
                                start: {
                                    type: "Integer"
                                },
                                end: {
                                    type: "Integer"
                                }
                            }
                        },
                        mediaId: {
                            type: "string"
                        }
                    }
                }

            }
        }
    },
    apis: ['./routes/*.js']


};

const openApiConfig = swaggerJsdoc(options)

module.exports = openApiConfig;