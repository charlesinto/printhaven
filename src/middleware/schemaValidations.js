import { BestSellingProductSchema, ProductSchema } from "../schema/Product";
import {
  CitySchema,
  deliveryAddressSchema,
  RegionSchema,
  UpdateRegionSchema,
} from "../schema/deliveryAddress";
import { editProfileSchema } from "../schema/editProfile";
import { homePageBannerSchema } from "../schema/homePageBanner";
import { wishListSchema } from "../schema/wishList";
import { changePasswordSchema } from "../schema/changePassword";
import { contactUsSchema } from "../schema/contactUs";

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

export const wishListSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = wishListSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const changePasswordSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = changePasswordSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

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
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const contactUsSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = contactUsSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const bestSellingProductSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = BestSellingProductSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};

export const updateRegionSchemaValidate = (req, res, next) => {
  try {
    const { error, value } = UpdateRegionSchema.validate(req.body);
    if (error)
      return res.status(409).send({ message: "Validation failed", error });

    return next();
  } catch (error) {
    throw new Error(error);
  }
};
