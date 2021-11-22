"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DealsOfDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DealsOfDay.hasMany(models.DealsOfDayProduct, { as: "deals" });
    }
  }
  DealsOfDay.init(
    {
      startDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      endDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      percentageDiscount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "DealsOfDay",
    }
  );
  return DealsOfDay;
};
