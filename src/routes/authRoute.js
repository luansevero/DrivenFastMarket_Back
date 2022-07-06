import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import { signInValidation, signUpValidation } from "../middlewares/authSchemaValidationMiddleware.js";




const authRoute = Router();

authRoute.post("/signIn",signInValidation, signIn);
authRoute.post("/signUp",signUpValidation, signUp);

export default authRoute;