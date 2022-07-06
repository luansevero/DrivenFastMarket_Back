import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/signIn", signIn);
authRoute.post("/signUp", signUp);

export default authRoute;