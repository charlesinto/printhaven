import db from "../../models";
import App from "../helpers";
import MailService from "../service/MailService";
import { Op } from "sequelize";

const {
  Product,
  ProductDesciption,
  ProductDesciptionValue,
  SubCategory,
  BestsellingProduct,
  TopCategories,
  ParentCategory,
} = db;

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
  static async addProductToBestSelling(req, res) {
    try {
      const payload = req.body;
      const uniqueProducts = [];
      for (let i = 0; i < payload.length; i++) {
        const product = await BestsellingProduct.findOne({
          where: { productId: payload[i] },
        });
        if (!product) uniqueProducts.push(payload[i]);
      }
      const productIds = uniqueProducts.map((id) => ({ productId: id }));

      await BestsellingProduct.bulkCreate(productIds);

      res.status(200).send({ message: "Operation successful" });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async addTopSellingCategories(req, res) {
    try {
      const payload = req.body;
      const uniqueProducts = [];
      for (let i = 0; i < payload.length; i++) {
        const product = await TopCategories.findOne({
          where: { productId: payload[i] },
        });
        if (!product) uniqueProducts.push(payload[i]);
      }
      const categoryIds = uniqueProducts.map((id) => ({
        parentCategoryId: id,
      }));

      await TopCategories.bulkCreate(categoryIds);

      res.status(200).send({ message: "Operation successful" });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async removeProductFromBestSelling(req, res) {
    try {
      const payload = req.body;

      for (let i = 0; i < payload.length; i++) {
        await BestsellingProduct.destroy({ where: { productId: payload[i] } });
      }
      res.status(200).send({ message: "Operation successful" });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async removeCategoryFromTopCategory(req, res) {
    try {
      const payload = req.body;

      for (let i = 0; i < payload.length; i++) {
        await TopCategories.destroy({
          where: { parentCategoryId: payload[i] },
        });
      }
      res.status(200).send({ message: "Operation successful" });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getBestSellingProducts(req, res) {
    try {
      const bestsellingProducts = await BestsellingProduct.findAll({
        include: [{ model: Product, as: "product" }],
      });
      res
        .status(200)
        .send({ message: "Operation successful", data: bestsellingProducts });
    } catch (error) {
      throw new Error(error);
    }
  }
  static async getTopCategories(req, res) {
    try {
      const topCategories = await TopCategories.findAll({
        include: [{ model: ParentCategory, as: "category" }],
      });
      res
        .status(200)
        .send({ message: "Operation successful", data: topCategories });
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
