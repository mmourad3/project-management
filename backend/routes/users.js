import express from "express";

import { deleteUser, logIn, signUp,getUsers } from "../controllers/users.js";

const router = express.Router();


router.post("/signup", signUp);

router.post('/login', logIn)

router.delete('/:id', deleteUser)

router.get('/', getUsers);

export default router;
