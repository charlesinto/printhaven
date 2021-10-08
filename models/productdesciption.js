"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductDesciption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductDesciption.hasMany(models.ProductDesciptionValue, {
        as: "values",
      });
      ProductDesciption.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }
  ProductDesciption.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
      modelName: "ProductDesciption",
    }
  );
  return ProductDesciption;
};
