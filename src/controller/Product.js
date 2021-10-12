import db from "../../models";
import App from "../helpers";
import MailService from "../service/MailService";
import { Op } from "sequelize";

const { Product, ProductDesciption, ProductDesciptionValue, SubCategory } = db;

class ProductController {
  static async createProduct(req, res) {
    try {
      const { features, ...rest } = req.body;

      const product = await Product.create({ ...rest }, { raw: true });

      for (let i = 0; i < features.length; i++) {
        const extraInfo = await ProductDesciption.create(
          {
            name: features[i].title,
            productId: product.id,
          },
          { raw: true }
        );
        const values = features[i].values;
        for (let k = 0; k < values.length; k++) {
          await ProductDesciptionValue.create({
            name: values[k],
            productDesciptionId: extraInfo.id,
          });
        }
      }

      return res
        .status(201)
        .send({ message: "Product created successfully", data: product });
    } catch (error) {
      throw new Error(error);
    }
  }
  static async getProducts(req, res) {
    try {
      const products = await Product.findAll();

      return res.status(200).send({ data: products });
    } catch (error) {
      throw new Error(error);
    }
  }
  static async getproductByID(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        raw: true,
      });

      if (!product)
        return res.status(404).send({ message: "Product not found" });

      const extras = [];

      const descriptions = await ProductDesciption.findAll({
        where: {
          productId: product.id,
        },
        raw: true,
      });

      for (let i = 0; i < descriptions.length; i++) {
        const descriptionValue = await ProductDesciptionValue.findAll({
          where: {
            productDesciptionId: descriptions[i].id,
          },
          raw: true,
        });

        const values = [];

        for (let k = 0; k < descriptionValue.length; k++) {
          values.push(descriptionValue[k].name);
        }

        extras.push({
          title: descriptions[i].name,
          values,
        });
      }

      return res.status(200).send({ data: { ...product, features: extras } });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ProductController;
