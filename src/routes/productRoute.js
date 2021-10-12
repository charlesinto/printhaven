import express from "express";
import ProductController from "../controller/Product";
import AuthMiddleWare from "../middleware/AuthMiddleware";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import { ProductSchemaValidate } from "../middleware/schemaValidations";
const router = express.Router();

router.post(
  "/admin/create-product",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(ProductSchemaValidate),
  handleErrorAsync(ProductController.createProduct)
);

router.get("/get-products", handleErrorAsync(ProductController.getProducts));

router.get(
  "/get-product/:id",
  handleErrorAsync(ProductController.getproductByID)
);

export default router;
