import { createUserService } from "../controllers/usersController.js";
import express from "express";
import { loginUserService } from "../controllers/usersController.js";
import { loginMiddleWare } from "../quaries/user/loginMiddleware.js";
import { createRecordService } from "../controllers/usersController.js";
import { refreshLoggedInController } from "../controllers/refreshUserController.js";
import { getUserRecordController } from "../controllers/getUserRecordControlller.js";
const useRouter = express.Router();

//Create

useRouter.post("/signup", createUserService);

//Login
useRouter.post("/login", loginMiddleWare, loginUserService);

//verify_token
useRouter.post("/refresh", refreshLoggedInController);

//record
useRouter.post("/records", createRecordService);

//getUserData
useRouter.post("/getRecord", getUserRecordController);

export default useRouter;
