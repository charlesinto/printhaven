import Express from "express";
import AuthMiddleWare from "../middleware/AuthMiddleware";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import DeliveryController from "../controller/DeliveryController";
import {
  regionSchemaValidate,
  citySchemaValidate,
} from "../middleware/schemaValidations";

const router = Express.Router();

router.post(
  "/admin/create-region",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(regionSchemaValidate),
  handleErrorAsync(DeliveryController.createRegion)
);

router.get("/get-regions", handleErrorAsync(DeliveryController.getRegions));

router.post(
  "/admin/create-city",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(citySchemaValidate),
  handleErrorAsync(DeliveryController.createCity)
);

export default router;
