import Joi from "joi";

export const homePageBannerSchema = Joi.array().items(
  Joi.object({
    images: Joi.array().items(Joi.string()).min(1).required(),
    banner: Joi.string().required(),
    parentCategoryId: Joi.number().required(),
  })
);
