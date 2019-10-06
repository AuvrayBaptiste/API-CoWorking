// Imports
let express = require ('express');
let boarder = require('body-parser');
let apiRouter = require('./apiRouter').router;
let cors = require('cors');

let server = express();

server.use(cors());

//body-parser
server.use(boarder.urlencoded({ extended: true }));
server.use(boarder.json());

server.use('/api/',apiRouter());

server.listen('8080', function () {
    console.log("serveur OK");
});

module.exports = server ;