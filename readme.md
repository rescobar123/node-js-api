# dependencias
- npm install cors dotenv multer express    (cors para los cors, dotenv para trabjara varaibles de entorno, multer para tratar el multimedia)
- npm install mongoose -S
- npm install nodemon -g
- npm install express-validator   -> validar request
- npm install mongoose-delete -S -> borrado logico
- npm install jsonwebtoken -S
- npm install bcryptjs -S  -> Encriptar credenciales en base de datos
- npm install morgan-body -S  -> para tratar los bodys de las peticiones
- npm install @slack/webhook -S  -> para conectar a slack
- npm install swagger-ui-express -S  -> crea documentacion segun rutas metodos y demas de express
- npm install swagger-jsdoc -S  -> crea documentacion segun loscomentarios
- npm install jest supertest -D -> jest hacer pruebas unitarias e integracion, supertest -> hacer peticiones
- npm install cross-env -D -> ayudar a inyecciones de dependencia por comando
agregar esto a package.json
  "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": [
      "node_modules/"
    ]
  }
# codigos de error http
- httpstatuses.com

 {
    "name": "Leifer",
    "album": "Album",
    "cover": "http://hhh.com",
    "artist": {
        "name": "Leifer",
        "nickname": "rescobar",
        "nationatily": "GT"
    }   ,
    "duration": {
        "start": 1,
        "end": 0
    },
    "mediaId": "621e7499a1f699063f5114bc"
}