var elasticsearch = require("elasticsearch");
let express = require('express');

var apiRouter = express.Router();
let userCtrl = require('./control/user');
let barsCtrl = require('./control/bars');
let reservationCtrl = require('./control/reservation');



exports.router = (function (){

    let apiRouter = express.Router();

    //user
    apiRouter.route('/users/post/').post(userCtrl.post);
    apiRouter.route('/users/login/').post(userCtrl.login);
    apiRouter.route('/users/delete/').delete(userCtrl.delete);
    apiRouter.route('/users/info/').get(userCtrl.getUserProfile);

    apiRouter.route('/bars/post/').post(barsCtrl.post);
    apiRouter.route('/bars/login/').post(barsCtrl.login);
    apiRouter.route('/bars/delete/').delete(barsCtrl.delete);
    apiRouter.route('/bars/info/').get(barsCtrl.getUserProfile);

    apiRouter.route('/reservation/post/').post(reservationCtrl.post);
    apiRouter.route('/reservation/login/').post(reservationCtrl.login);
    apiRouter.route('/reservation/delete/').delete(reservationCtrl.delete);
    apiRouter.route('/reservation/info/').get(reservationCtrl.getUserProfile);
    return apiRouter;
});

