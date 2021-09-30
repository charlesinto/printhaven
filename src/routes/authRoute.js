import express from "express";
import AuthController from "../controller/AuthController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";

const router = express.Router();

router.post("/signup", handleErrorAsync(AuthController.signUp));

router.post("/login", handleErrorAsync(AuthController.login));

<<<<<<< HEAD
router.put("/forgot-password", handleErrorAsync(AuthController.forgotPassword));
router.put("/reset-password", handleErrorAsync(AuthController.resetPassword));

=======
router.post(
  "/reset-password",
  AuthMiddleware.verifyToken,
  handleErrorAsync(AuthController.resetPassword)
);
>>>>>>> master

export default router;
