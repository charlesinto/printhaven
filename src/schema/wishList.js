import Joi from "joi";

export const wishListSchema = Joi.object({
    quantity: Joi.number().required(),
    productId: Joi.number().required()

});