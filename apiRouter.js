var express = require('express');
var elasticsearch = require("elasticsearch");
var apiRouter = express.Router();

var user = new elasticsearch.Client({
    host: 'localhost:9200'
});

user.ping({
    requestTimeout: 3000,
}, function(error){
    if(error){
        console.error('elasticsearch cluster is down');
    }
    else{
        console.log('Everything is ok');
    }
});

/* POST User */ 

apiRouter.post('/newUser', (req, res) =>  {
    if(!req.body.id){
        return res.status(400).send({
            message : 'Id is required'
        });
    }
    user.index({
        index : 'user',
        type: 'userType',
        id: req.body.id,
        body: req.body
    }, function(err,resp,status){
        if(err){
            console.log(err);
        }
        else {
            return res.status(200).send({
                message : 'POST user success'
            })
        }
    });
})


