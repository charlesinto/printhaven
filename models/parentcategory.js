"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ParentCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ParentCategory.hasMany(models.SubCategory, { as: "subCategories" });
    }
  }
  ParentCategory.init(
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
    },
    {
      sequelize,
      modelName: "ParentCategory",
    }
  );
  return ParentCategory;
};
