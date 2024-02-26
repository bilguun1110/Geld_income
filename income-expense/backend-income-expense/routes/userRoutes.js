import { createUserService } from "../controllers/usersController.js";
import express from "express";
import { loginUserService } from "../controllers/usersController.js";
import { loginMiddleWare } from "../quaries/user/loginMiddleware.js";
import { tokenMiddleChecker } from "../quaries/user/tokenMiddleWare.js";
import { createRecordService } from "../controllers/usersController.js";
const useRouter = express.Router();

//Create

useRouter.post("/signup", createUserService);

//Login
useRouter.post("/login", loginMiddleWare, loginUserService);

//record
useRouter.post("/records", createRecordService);

export default useRouter;
