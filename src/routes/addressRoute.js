import express from "express";
import AddressController from "../controller/AddressController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";

const addressRouter = express.Router();

addressRouter
    .route("/index/:addressId")
    .get(handleErrorAsync(AuthMiddleware.verifyToken),
        handleErrorAsync(AddressController.getAddress)
    );

addressRouter
    .route("/index")
    .get(
        handleErrorAsync(AuthMiddleware.verifyToken),
        handleErrorAsync(AddressController.getAllAddress)
    );

addressRouter
    .route("/create")
    .post(
        handleErrorAsync(AuthMiddleware.verifyToken),
        handleErrorAsync(AddressController.createAddress)
    );

addressRouter
    .route("/index/:addressId")
    .put(
        handleErrorAsync(AuthMiddleware.verifyToken),
        handleErrorAsync(AddressController.updateAddress)
    );

addressRouter
    .route("/index/:addressId")
    .delete(
        handleErrorAsync(AuthMiddleware.verifyToken),
        handleErrorAsync(AddressController.deleteAddress)
    );

export default addressRouter;
