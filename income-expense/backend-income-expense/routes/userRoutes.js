import { createUserService } from "../controllers/usersController.js";
import express from "express";
import { loginUserService } from "../controllers/usersController.js";
import { loginMiddleWare } from "../quaries/user/loginMiddleware.js";

import { createRecordService } from "../controllers/usersController.js";
import { refreshLoggedInController } from "../controllers/refreshUserController.js";
const useRouter = express.Router();

//Create

useRouter.post("/signup", createUserService);

//Login
useRouter.post("/login", loginMiddleWare, loginUserService);

useRouter.get("/refresh", refreshLoggedInController);

//record
useRouter.post("/records", createRecordService);

export default useRouter;
