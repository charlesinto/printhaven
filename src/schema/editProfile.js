import Joi from "joi";

export const editProfileSchema = Joi.object({
    name: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.number().required(),
    phoneNumber: Joi.number().required(),
});