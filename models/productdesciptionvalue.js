"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductDesciptionValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductDesciptionValue.belongsTo(models.ProductDesciption, {
        foreignKey: "productDesciptionId",
      });
    }
  }
  ProductDesciptionValue.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productDesciptionId: {
        type: DataTypes.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "ProductDesciption",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "ProductDesciptionValue",
    }
  );
  return ProductDesciptionValue;
};
