"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HomePageBannerImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HomePageBannerImages.belongsTo(models.HomePageBanner, {
        foreignKey: "homePageBannerId",
      });
    }
  }
  HomePageBannerImages.init(
    {
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      homePageBannerId: {
        type: DataTypes.INTEGER,
        references: {
          // User belongsTo ParentCategory 1:1
          model: "HomePageBanner",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "HomePageBannerImages",
    }
  );
  return HomePageBannerImages;
};
