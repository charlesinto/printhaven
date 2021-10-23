import Joi from "joi";

export const deliveryAddressSchema = Joi.object({
  streetAddress: Joi.string().required(),
  phoneNumber: Joi.number().required(),
  landmark: Joi.string().required(),
  region: Joi.string(),
  city: Joi.string(),
  isDefaultAddress: Joi.boolean().required(),
});

export const RegionSchema = Joi.object({
  name: Joi.string().required(),
});

export const CitySchema = Joi.object({
  cities: Joi.array().items(Joi.string().required()).min(1),
  regionId: Joi.number().required(),
});
