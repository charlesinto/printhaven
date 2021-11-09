'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class couponCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  couponCode.init({
    Code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    percentageDiscount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxDiscount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    minDiscount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isValid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'couponCode',
  });
  return couponCode;
};