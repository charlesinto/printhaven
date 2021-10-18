import Express from "express";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleWare from "../middleware/AuthMiddleware";
import { homePageBannerSchemaValidate } from "../middleware/schemaValidations";
import AdvertController from "../controller/AdvertController";

const router = Express.Router();

router.post(
  "/create-homepage-banner-adverts",
  handleErrorAsync(AuthMiddleWare.verifyToken),
  handleErrorAsync(AuthMiddleWare.isAdmin),
  handleErrorAsync(homePageBannerSchemaValidate),
  handleErrorAsync(AdvertController.createHomePageBanner)
);

router.get(
  "/get-homepage-banner-adverts",
  handleErrorAsync(AdvertController.getHomePageBanners)
);

export default router;
