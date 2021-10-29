'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deliveryAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      deliveryAddress.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      deliveryAddress.belongsTo(models.City, { foreignKey: 'cityId', as: 'city' });
      deliveryAddress.belongsTo(models.Region, { foreignKey: 'regionId', as: 'region' });

    }
  };

  deliveryAddress.init({
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    landmark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Region",
        key: "id",
      },
      allowNull: false
    },
    cityId: {
      type: DataTypes.INTEGER,
      references: {
        model: "City",
        key: "id",
      },
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
      allowNull: false
    },
    isDefaultAddress: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'deliveryAddress',
  });
  return deliveryAddress;
};