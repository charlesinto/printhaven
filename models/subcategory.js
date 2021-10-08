"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubCategory.belongsTo(models.ParentCategory, {
        foreignKey: "parentCategoryId",
      });
      SubCategory.hasMany(models.Product, { as: "products" });
    }
  }
  SubCategory.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      isBlocked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      parentCategoryId: {
        type: DataTypes.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "ParentCategory",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "SubCategory",
    }
  );
  return SubCategory;
};
