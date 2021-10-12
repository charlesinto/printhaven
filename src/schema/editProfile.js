import Joi from "joi";

export const editProfileSchema = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.number().required(),
    phoneNumber: Joi.number().required(),
});