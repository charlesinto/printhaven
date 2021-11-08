"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TopCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TopCategories.belongsTo(models.ParentCategory, {
        foreignKey: "parentCategoryId",
      });
    }
  }
  TopCategories.init(
    {
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
      modelName: "ParentCategory",
    }
  );
  return TopCategories;
};
