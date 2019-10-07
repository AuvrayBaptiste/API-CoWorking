var elasticsearch = require("elasticsearch");

var elClient = new elasticsearch.Client({
    host: 'localhost:9200'
});

// elClient.ping({
//     requestTimeout: 3000,
// }, function(error){
//     if (error){
//         console.error('Elasticsearch cluster is down');
//     }
//     else{
//         console.log('Everything is ok');
//     }
// });

// /* POST User */
// apiRouter.post('/newUser', (req, res) =>  {

// })


exports.post = function (req, res) {
    // if (!req.body.id) {
    //     return res.status(400).send({
    //         message: 'Id is required'
    //     });
    // }
    // elClient.index({
    //     index: 'user',
    //     type: 'userType',
    //     id: req.body.id,
    //     body: req.body
    // }, function (err, res, status) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         return res.status(201).send({
    //             message: 'POST user success'
    //         })
    //     }
    // });
};

exports.login = function (req, res) {
    //TODO: do your stuff here...
};
exports.delete = function (req, res) {
    //TODO: do your stuff here...
};
exports.modify = function (req, res) {
    //TODO: do your stuff here...
};
exports.getUserProfile = function (req, res) {
    //TODO: do your stuff here...
    console.log('TEST');
};
