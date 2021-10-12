import express from "express";
import CategoryController from "../controller/CategoryController";
import AuthMiddleWare from "../middleware/AuthMiddleware";
import { handleErrorAsync } from "../middleware/ErrorHandler";

const router = express.Router();

router.post(
  "/admin/create-parent-category",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(CategoryController.createParentCategory)
);

router.post(
  "/admin/create-sub-category",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(CategoryController.createSubCategory)
);

router.get(
  "/parent-categories",
  handleErrorAsync(CategoryController.getParentCategories)
);

router.get(
  "/sub-categories",
  handleErrorAsync(CategoryController.getSubCategories)
);

export default router;
