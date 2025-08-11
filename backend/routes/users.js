import express from "express";

import { deleteUser, logIn, signUp } from "../controllers/users.js";

const router = express.Router();


router.post("/signup", signUp);

router.post('/login', logIn)

router.delete('/:id', deleteUser)

export default router; 
