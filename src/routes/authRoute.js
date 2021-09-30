import express from "express";
import AuthController from "../controller/AuthController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";

const router = express.Router();

router.post("/signup", handleErrorAsync(AuthController.signUp));

router.post("/login", handleErrorAsync(AuthController.login));

router.put("/forgot-password", handleErrorAsync(AuthController.forgotPassword)
);
router.post(
  "/reset-password",
  AuthMiddleware.verifyToken,
  handleErrorAsync(AuthController.resetPassword)
);

export default router;
