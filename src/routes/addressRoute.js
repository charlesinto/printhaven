import express from "express";
import AddressController from "../controller/AddressController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { deliveryAddresSchemaValidate } from "../middleware/schemaValidations";


const addressRouter = express.Router();

addressRouter.get(
    "/index/:addressId",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(AddressController.getAddress)
);

addressRouter.get(
    "/index",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(AddressController.getAllAddress)
);

addressRouter.post(
    "/create",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(deliveryAddresSchemaValidate),
    handleErrorAsync(AddressController.createAddress)
);

addressRouter.put(
    "/index/:addressId",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(deliveryAddresSchemaValidate),
    handleErrorAsync(AddressController.updateAddress)
);

addressRouter.delete(
    "/index/:addressId",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(AddressController.deleteAddress)
);

export default addressRouter;
