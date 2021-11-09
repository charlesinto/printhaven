import express from "express";
import couponCodeController from "../controller/couponCodeController";
import AuthMiddleWare from "../middleware/AuthMiddleware";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import { CouponCodeSchemaValidate, activateAndDeactivateCouponchemaValidate } from "../middleware/schemaValidations";

const router = express.Router();

router.post(
  "/create-coupon",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(CouponCodeSchemaValidate),
  handleErrorAsync(couponCodeController.createCouponCode)
);

router.delete(
  "/delete-coupon/:id",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(couponCodeController.deleteCouponCode)
);

router.post(
  "/validate-coupon/:id",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(activateAndDeactivateCouponchemaValidate),
  handleErrorAsync(couponCodeController.activateAndDeactivateCouponCode)
);

router.put(
  "/update-coupon/:id",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(CouponCodeSchemaValidate),
  handleErrorAsync(couponCodeController.updateCouponCode)
);

router.get(
  "/get-coupons",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(couponCodeController.getAllCouponCode)
);

router.get(
  "/get-coupon/:id",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(couponCodeController.getCouponCode)
);

export default router;
