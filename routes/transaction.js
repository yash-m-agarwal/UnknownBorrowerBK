const express = require('express');
const transactionRouter = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../controllers/loginController').AuthorizationMiddleware;


/* Send Request to lender */
transactionRouter.post('/sendRequest', authMiddleware, transactionController.sendRequest);

//check
transactionRouter.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = transactionRouter;