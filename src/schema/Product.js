import Joi from "joi";

export const ProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  finalPrice: Joi.number().required(),
  sellingPrice: Joi.number().required(),
  weight: Joi.number().required(),
  stockCount: Joi.number().required(),
  shippingType: Joi.string().required(),
  customizationType: Joi.string().required(),
  subCategoryId: Joi.number().required(),
  mainImageUrl: Joi.string().required(),
  thumbNailUrl: Joi.string(),
  otherImageUrl1: Joi.string(),
  otherImageUrl2: Joi.string(),
  otherImageUrl3: Joi.string(),
  otherImageUrl4: Joi.string(),
  isBlocked: Joi.boolean(),
  features: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      values: Joi.array().min(1),
    })
  ),
});
