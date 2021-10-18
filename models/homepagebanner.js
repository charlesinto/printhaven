"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HomePageBanner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HomePageBanner.hasMany(models.HomePageBannerImages, {
        as: "bannerImages",
      });
      HomePageBanner.belongsTo(models.ParentCategory, {
        foreignKey: "parentCategoryId",
      });
    }
  }
  HomePageBanner.init(
    {
      banner: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      parentCategoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "ParentCategory",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "HomePageBanner",
    }
  );
  return HomePageBanner;
};
