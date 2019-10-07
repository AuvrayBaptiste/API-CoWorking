var elasticsearch = require("elasticsearch");
let express = require('express');

var apiRouter = express.Router();
let userCtrl = require('./control/user');
let barCtrl = require('./control/bar');
let bookingCtrl = require('./control/booking');

exports.router = (function (){

    let apiRouter = express.Router();

    //user
    apiRouter.route('/users/new/').post(userCtrl.post);
    apiRouter.route('/users/login/').post(userCtrl.login);
    apiRouter.route('/users/delete/').delete(userCtrl.delete);
    apiRouter.route('/users/modify/').put(userCtrl.modify);
    apiRouter.route('/users/info/').get(userCtrl.getUserProfile);

    apiRouter.route('/bars/new/').post(barCtrl.post);
    apiRouter.route('/bars/delete/').delete(barCtrl.delete);
    apiRouter.route('/bars/modify/').put(barCtrl.modify);
    apiRouter.route('/bars/info/').get(barCtrl.getUserProfile);
    apiRouter.route('/bars/list/').get(barCtrl.getAllUsers);
    apiRouter.route('/bars/search/').get(barCtrl.getCloseBars);

    apiRouter.route('/bookings/new/').post(bookingCtrl.post);
    apiRouter.route('/bookings/delete/').delete(bookingCtrl.delete);
    apiRouter.route('/bookings/modify/').put(bookingCtrl.login);
    apiRouter.route('/bookings/info/').get(bookingCtrl.getBookingInfo);
    apiRouter.route('/bookings/list/').get(bookingCtrl.getBookingsByUser);

    return apiRouter;
});
