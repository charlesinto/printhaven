import db from "../../models";

const { ParentCategory, SubCategory } = db;

class CategoryController {
  static async createParentCategory(req, res) {
    try {
      const { name } = req.body;

      const category = await ParentCategory.create({ name });

      return res
        .status(201)
        .send({ data: category, message: "operation successful" });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getParentCategories(req, res) {
    try {
      const category = await ParentCategory.findAll();

      return res
        .status(200)
        .send({ data: category, message: "operation successful" });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getSubCategories(req, res) {
    try {
      const category = await SubCategory.findAll({
        attributes: { exclude: ["ParentCategoryId", "parentCategoryId"] },
        include: "ParentCategory",
      });

      return res
        .status(200)
        .send({ data: category, message: "operation successful" });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async createSubCategory(req, res) {
    try {
      const { name, parentCategoryId } = req.body;

      const subCategory = await SubCategory.create({ name, parentCategoryId });

      return res
        .status(201)
        .send({ data: subCategory, message: "operation successful" });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default CategoryController;
