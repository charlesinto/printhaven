import Express from "express";
import AuthMiddleWare from "../middleware/AuthMiddleware";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import DeliveryController from "../controller/DeliveryController";
import {
  regionSchemaValidate,
  citySchemaValidate,
  updateRegionSchemaValidate,
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

router.get("/get-region", handleErrorAsync(DeliveryController.getRegions));

router.post(
  "/admin/create-city",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(citySchemaValidate),
  handleErrorAsync(DeliveryController.createCity)
);

router.delete(
  "/admin/delete-region/:id",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(DeliveryController.deleteRegionById)
);

router.put(
  "/admin/update-region/:id",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(updateRegionSchemaValidate),
  handleErrorAsync(DeliveryController.updateRegionByID)
);

router.get(
  "/get-region-with-cities",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(DeliveryController.getRegionWithCities)
);

export default router;
