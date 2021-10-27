"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BestsellingProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BestsellingProduct.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }
  BestsellingProduct.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "Product",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "BestsellingProduct",
    }
  );
  return BestsellingProduct;
};
