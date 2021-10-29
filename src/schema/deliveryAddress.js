import Joi from "joi";

export const deliveryAddressSchema = Joi.object({
  streetAddress: Joi.string().required(),
  phoneNumber: Joi.number().required(),
  landmark: Joi.string().required(),
  regionId: Joi.number().required(),
  cityId: Joi.number().required(),
  lastName: Joi.string().required(),
  firstName: Joi.string().required(),
  countryCode: Joi.string().required(),
  isDefaultAddress: Joi.boolean().required(),
});

export const RegionSchema = Joi.object({
  name: Joi.string().required(),
});

export const CitySchema = Joi.object({
  cities: Joi.array().items(Joi.string().required()).min(1),
  regionId: Joi.number().required(),
});
