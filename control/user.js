var elasticsearch = require("elasticsearch");

var elClient = new elasticsearch.Client({
    host: 'localhost:9200'
});

exports.post = function (req, res) {
};

exports.login = function (req, res) {
};

exports.delete = function (req, res) {
};

exports.modify = function (req, res) {
};

exports.getUserProfile = async function (req, res) {
        const { body } = await elClient.get({
            index: 'utilisateurs',
            id: '1'
        });
        console.log(body);
};