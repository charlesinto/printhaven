"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DealsOfDayProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DealsOfDayProduct.belongsTo(models.DealsOfDay, {
        foreignKey: "dealId",
      });
      DealsOfDayProduct.belongsTo(models.Product, {
        foreignKey: "productId",
      });
    }
  }
  DealsOfDayProduct.init(
    {
      dealId: {
        type: DataTypes.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "Product",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "DealsOfDay",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "DealsOfDayProduct",
    }
  );
  return DealsOfDayProduct;
};
