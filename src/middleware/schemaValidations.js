import { ProductSchema } from "../schema/Product";
import {
  CitySchema,
  deliveryAddressSchema,
  RegionSchema,
} from "../schema/deliveryAddress";
import { editProfileSchema } from "../schema/editProfile";
import { homePageBannerSchema } from "../schema/homePageBanner";
import { wishListSchema } from "../schema/wishList";

export const ProductSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = ProductSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const deliveryAddresSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = deliveryAddressSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const editProfileValidate = (req, res, next) => {
  try {
    const { error, value } = editProfileSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const homePageBannerSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = homePageBannerSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

<<<<<<< HEAD
export const wishListSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = wishListSchema.validate(req.body);
=======
export const regionSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = RegionSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const citySchemaValidate = (req, res, next) => {
  try {
    const { error, value } = CitySchema.validate(req.body);
>>>>>>> 5416e3c74ec8973001248f23abe3a899a13787e9
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};
