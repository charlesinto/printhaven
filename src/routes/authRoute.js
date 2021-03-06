import express from "express";
import AuthController from "../controller/AuthController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";
import {
  changePasswordSchemaValidate,
  editProfileValidate,
} from "../middleware/schemaValidations";

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

router.post(
  "/forgot-password",
  handleErrorAsync(AuthController.forgotPassword)
);

router.put(
  "/edit-profile",
  AuthMiddleware.verifyToken,
  handleErrorAsync(editProfileValidate),
  handleErrorAsync(AuthController.editProfile)
);

router.get(
  "/verify-token/:tokenId",
  handleErrorAsync(AuthMiddleware.verifyTokenByID),
  handleErrorAsync(AuthController.getUserName)
);

router.post(
  "/reset-password",
  handleErrorAsync(AuthMiddleware.verifyToken),
  handleErrorAsync(AuthController.resetPassword)
);

router.post(
  "/reset-password/:tokenId",
  handleErrorAsync(AuthMiddleware.verifyTokenByID),
  handleErrorAsync(AuthController.resetPassword)
);

router.get(
  "/user/get-profile",
  handleErrorAsync(AuthMiddleware.verifyToken),
  handleErrorAsync(AuthController.getUserProfile)
);

router.get(
  "/admin/get-profile",
  handleErrorAsync(AuthMiddleware.verifyToken),
  handleErrorAsync(AuthMiddleware.isAdmin),
  handleErrorAsync(AuthController.getAdminProfile)
);

router.post(
  "/change-password",
  handleErrorAsync(AuthMiddleware.verifyToken),
  handleErrorAsync(changePasswordSchemaValidate),
  handleErrorAsync(AuthController.changePassword)
);

export default router;
