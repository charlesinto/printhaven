import Joi from "joi";

export const contactUsSchema = Joi.object({
    name: Joi.string().required(),
    subject: Joi.string().required(),
    email: Joi.string().required().email(),
    description: Joi.string().required()
});