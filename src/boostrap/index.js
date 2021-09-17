import "core-js/stable";
import "regenerator-runtime/runtime";

const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/config.json")[env];
const { logger } = require("../logger/winston");

module.exports = function () {
  let sequelize;
  if (env === "production") {
    sequelize = new Sequelize(process.env.DB_URL, {
      ...config,
      logging: (msg) => logger.debug(msg),
    });
  } else {
    console.log("called here now o");
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      { ...config, logging: (msg) => logger.debug(msg) }
    );
  }
  return {
    sequelize,
  };
};
