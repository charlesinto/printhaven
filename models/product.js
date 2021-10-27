"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.ProductDesciption, { as: "productDescription" });
      Product.belongsTo(models.SubCategory, {
        foreignKey: { name: "subCategoryId" },
      });
      Product.hasMany(models.wishList, {
        foreignKey: "productId",
      });

      Product.hasOne(models.BestsellingProduct, { as: "product" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      finalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sellingPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      stockCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      shippingType: {
        type: DataTypes.STRING,
        defaultValue: "HOME_DELIVERY",
      },
      customizationType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subCategoryId: {
        type: DataTypes.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "SubCategory",
          key: "id",
        },
      },
      mainImageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      thumbNailUrl: {
        type: DataTypes.STRING,
      },
      otherImageUrl1: {
        type: DataTypes.STRING,
      },
      otherImageUrl2: {
        type: DataTypes.STRING,
      },
      otherImageUrl3: {
        type: DataTypes.STRING,
      },
      otherImageUrl4: {
        type: DataTypes.STRING,
      },
      isBlocked: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
