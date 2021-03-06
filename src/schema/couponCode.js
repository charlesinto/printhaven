import Joi from "joi";

export const couponCodeSchema = Joi.object({
    code: Joi.string().required(),
    percentageDiscount: Joi.number().required(),
    maxDiscount: Joi.number().required(),
    expiresAt: Joi.date().greater('now').iso().required(),
    minDiscount: Joi.number().required(),
    maxUsage: Joi.number().required(),
    isValid: Joi.boolean().required(),

});

export const activateAndDeactivateCouponCodeSchema = Joi.object({
    isValid: Joi.boolean().required(),
});

export const applyCouponCodeCouponCodeSchema = Joi.object({
    totalPrice: Joi.number().required(),
    code: Joi.string().required()

});

