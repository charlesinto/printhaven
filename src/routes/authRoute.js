import express from "express";
import AuthController from "../controller/AuthController";
import { handleErrorAsync } from "../middleware/ErrorHandler";

const router = express.Router();

router.post("/signup", handleErrorAsync(AuthController.signUp));

router.post("/login", handleErrorAsync(AuthController.login));

router.put("/forgot-password", handleErrorAsync(AuthController.forgotPassword));
router.put("/reset-password", handleErrorAsync(AuthController.resetPassword));


export default router;
