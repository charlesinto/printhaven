import express from "express";
import AuthController from "../controller/AuthController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";

const router = express.Router();

router.post("/signup", handleErrorAsync(AuthController.signUp));

router.post("/admin/login", handleErrorAsync(AuthController.adminLogin));

router.post(
  "/super-admin/create-admin",
  handleErrorAsync(AuthMiddleware.verifyToken),
  handleErrorAsync(AuthMiddleware.isSuperAdmin),
  handleErrorAsync(AuthController.createAdmin)
);

router.post(
  "/verify-phonenumber",
  handleErrorAsync(AuthController.verifyPhoneNumber)
);
router.post("/verify-email", handleErrorAsync(AuthController.verifyEmail));

router.post("/login", handleErrorAsync(AuthController.login));

router.put("/forgot-password", handleErrorAsync(AuthController.forgotPassword));

router
  .route("/edit-profile")
  .put(AuthMiddleware.verifyToken,
    handleErrorAsync(AuthController.editProfile)
  );

router
  .route("/reset-password")
  .post(
    AuthMiddleware.verifyToken,
    handleErrorAsync(AuthController.resetPassword)
  );

router
  .route("/reset-password/:tokenId")
  .post(
    AuthMiddleware.verifyTokenByID,
    handleErrorAsync(AuthController.resetPassword)
  );

export default router;
