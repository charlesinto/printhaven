import Joi from "joi";

export const deliveryAddressSchema = Joi.object({
  streetAddress: Joi.string().required(),
  phoneNumber: Joi.number().required(),
  landmark: Joi.string().required(),
  region: Joi.string().required(),
  city: Joi.string().required(),
  lastName: Joi.string().required(),
  firstName: Joi.string().required(),
  countryCode: Joi.string().required(),
  isDefaultAddress: Joi.boolean().required(),
});

export const RegionSchema = Joi.object({
  name: Joi.string().required(),
});

export const UpdateRegionSchema = Joi.object({
  name: Joi.string().required(),
  cities: Joi.array(),
});

export const CitySchema = Joi.object({
  cities: Joi.array().items(Joi.string().required()).min(1),
  regionId: Joi.number().required(),
});
