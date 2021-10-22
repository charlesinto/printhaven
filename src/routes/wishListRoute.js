import express from "express";
import WishListController from "../controller/WishListController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { wishListSchemaValidate } from "../middleware/schemaValidations";


const wihsListRouter = express.Router();

// wihsListRouter.get(
//     "/favourites/:ProductId",
//     handleErrorAsync(AuthMiddleware.verifyToken),
//     handleErrorAsync(WishListController.getWishList)
// );

wihsListRouter.get(
    "/favourites",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(WishListController.getAllWishList)
);

wihsListRouter.post(
    "/favourites",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(wishListSchemaValidate),
    handleErrorAsync(WishListController.createWishList)
);

// wihsListRouter.put(
//     "/favourites/:ProductId",
//     handleErrorAsync(AuthMiddleware.verifyToken),
//     handleErrorAsync(wishListSchemaValidate),
//     handleErrorAsync(WishListController.updateWishList)
// );

wihsListRouter.delete(
    "/favourites/:WishListId",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(WishListController.deleteWishList)
);

export default wihsListRouter;
