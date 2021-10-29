import express from "express";
import AddressController from "../controller/AddressController";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { deliveryAddresSchemaValidate } from "../middleware/schemaValidations";


const addressRouter = express.Router();

addressRouter.get(
    "/delivery-addresses/:addressId",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(AddressController.getAddress)
);

addressRouter.get(
    "/delivery-addresses",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(AddressController.getAllAddress)
);

addressRouter.post(
    "/delivery-addresses",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(deliveryAddresSchemaValidate),
    handleErrorAsync(AddressController.createAddress)
);

addressRouter.put(
    "/delivery-addresses/:addressId",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(deliveryAddresSchemaValidate),
    handleErrorAsync(AddressController.updateAddress)
);

addressRouter.delete(
    "/delivery-addresses/:addressId",
    handleErrorAsync(AuthMiddleware.verifyToken),
    handleErrorAsync(AddressController.deleteAddress)
);

export default addressRouter;
