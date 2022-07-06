import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import authSchema from "../middlewares/authSchemaValidationMiddleware.js";



const authRoute = Router();

authRoute.post("/signIn",authSchema.signInValidation, signIn);
authRoute.post("/signUp",authSchema.singUpValidation, signUp);

export default authRoute;