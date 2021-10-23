import express from "express";
import helpController from "../controller/HelpController";
import AuthMiddleWare from "../middleware/AuthMiddleware";
import { handleErrorAsync } from "../middleware/ErrorHandler";
import { contactUsSchemaValidate } from "../middleware/schemaValidations";


const router = express.Router();

router.post(
    "/contact-us",
    handleErrorAsync(contactUsSchemaValidate),
    handleErrorAsync(helpController.createContactUs)
);

router.get(
    "/contact-us",
    handleErrorAsync(AuthMiddleWare.verifyToken),
    handleErrorAsync(AuthMiddleWare.isAdmin),
    handleErrorAsync(helpController.getAllcontactUs)
);

router.get(
    "/contact-us/:id",
    handleErrorAsync(AuthMiddleWare.verifyToken),
    handleErrorAsync(AuthMiddleWare.isAdmin),
    handleErrorAsync(helpController.getContactUsById)
);

export default router;
