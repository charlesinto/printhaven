import express from "express";
import ProductController from "../controller/Product";
import AuthMiddleWare from "../middleware/AuthMiddleware";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import {
  bestSellingProductSchemaValidate,
  ProductSchemaValidate,
} from "../middleware/schemaValidations";
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

router.post(
  "/admin/add-bestselling-products",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(bestSellingProductSchemaValidate),
  handleErrorAsync(ProductController.addProductToBestSelling)
);

router.post(
  "/admin/get-bestselling-products",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(bestSellingProductSchemaValidate),
  handleErrorAsync(ProductController.addProductToBestSelling)
);

router.post(
  "/admin/remove-bestselling-products",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(bestSellingProductSchemaValidate),
  handleErrorAsync(ProductController.removeProductFromBestSelling)
);

router.get(
  "/get-bestselling-products",
  handleErrorAsync(ProductController.getBestSellingProducts)
);

export default router;
