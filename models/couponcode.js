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
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    percentageDiscount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxDiscount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    usage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    maxUsage: {
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