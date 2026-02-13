import express from 'express';
import { userController } from '../controllers/user.controller.js';
const UserRouter= express.Router();

UserRouter.post('/finduser', async (req, res) => {
    const correo= req.body.correo;
    res.status(200).send(await userController(correo))
});

export {UserRouter}