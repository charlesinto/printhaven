import { ProductSchema } from "../schema/Product";
import { deliveryAddressSchema } from "../schema/deliveryAddress";

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
