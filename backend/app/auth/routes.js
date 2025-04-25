import express from 'express';

// get fuctionalities from the controller 
import {authorizeMW, login, logout} from './controller.js'

// instantiate a sub-server (router) to be connected to the corresponding endpoint of the server
const router = express.Router();

// router.get('/', authorizeMW, serverProfilePage);
router.post('/login', login)
router.get('/logout', logout)
// router.post('/register', register)

// middleware: are you logged in?
// router.use('/', authorizeMW)

export default router; // Export router