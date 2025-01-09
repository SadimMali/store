import express from "express";
import { creatUserHandler } from "../controller/user.controller";

const router = express.Router();

router.post("/register", creatUserHandler);

export default router;
