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
  "/admin/add-topselling-products",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(bestSellingProductSchemaValidate),
  handleErrorAsync(ProductController.addTopSellingCategories)
);

// router.post(
//   "/admin/get-bestselling-products",
//   handleErrorAsync(AuthMiddleWare.verifyToken),
//   handleErrorAsync(AuthMiddleWare.isAdmin),
//   handleErrorAsync(bestSellingProductSchemaValidate),
//   handleErrorAsync(ProductController.getBestSellingProducts)
// );

router.post(
  "/admin/remove-bestselling-products",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(bestSellingProductSchemaValidate),
  handleErrorAsync(ProductController.removeProductFromBestSelling)
);

router.post(
  "/admin/remove-topselling-products",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(bestSellingProductSchemaValidate),
  handleErrorAsync(ProductController.removeCategoryFromTopCategory)
);

router.get(
  "/get-bestselling-products",
  handleErrorAsync(ProductController.getBestSellingProducts)
);

router.get(
  "/get-topselling-products",
  handleErrorAsync(ProductController.getTopCategories)
);

export default router;
