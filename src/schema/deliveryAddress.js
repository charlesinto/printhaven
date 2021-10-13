import Joi from "joi";

export const deliveryAddressSchema = Joi.object({
    streetAddress: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    landmark: Joi.string().required(),
    region: Joi.string(),
    city: Joi.string(),
    isDefaultAddress: Joi.boolean().required(),
});