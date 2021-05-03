/**
 * Archivo para las rutas de usuarios
 *
 * @author llira
 * @version 1.0
 * @since 02/05/2021
 */
// Dependencies
const express = require('express');
// Local variables
const router = express.Router();
const user = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');
const { putForgot, putReset } = require('../controllers/auth.controller');

// Routes
router.post('/register', user.register);
router.post('/authenticate', user.authenticate);
router.get('/profile', jwtHelper.verifyJwtToken, user.userProfile);

router.get('/users', user.getUsers);
router.get('/user/:id', user.getUser);
router.put('/user/:id', user.editUser);

router.post('/forgot', putForgot);
router.put('/reset/:token', putReset);

module.exports = router;
