import Joi from "joi";

export const couponCodeSchema = Joi.object({
    code: Joi.string().required(),
    percentageDiscount: Joi.number().required(),
    maxDiscount: Joi.number().required(),
    expiresAt: Joi.date().greater('now').iso().required(),
    minDiscount: Joi.boolean().required(),
    isValid: Joi.boolean().required(),

});

export const activateAndDeactivateCouponCodeSchema = Joi.object({
    isValid: Joi.boolean().required(),
});

