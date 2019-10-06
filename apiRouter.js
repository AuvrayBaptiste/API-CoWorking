var elasticsearch = require("elasticsearch");
let express = require('express');

var apiRouter = express.Router();
let userCtrl = require('./control/user');

exports.router = (function (){

    let apiRouter = express.Router();

    //user
    apiRouter.route('/users/post/').post(userCtrl.post);
  /*  apiRouter.route('/users/login/').post(userCtrl.login);
    apiRouter.route('/users/delete/').delete(userCtrl.delete);
    apiRouter.route('/users/info/').get(userCtrl.getUserProfile);*/
    return apiRouter;
});

