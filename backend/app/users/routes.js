import express from 'express';
import { authorizeMW, login } from '../auth/controller.js';

// get fuctionalities from the controller 
import {addUser, getUsers, deleteUser, updateUsers} from './controller.js'
// import {authorizeMW, login, register, serverProfilePage} from './controller.js'

// instantiate a sub-server (router) to be connected to the corresponding endpoint of the server
const router = express.Router();

// router.use(authorizeMW);
// routing /users end points to it actions
router.post('/', addUser);
// router.get('/', getUsers);
// router.delete('/', deleteUser);
// router.put('/', updateUsers);

export default router; // Export router