import db from "../../models";
import Sequelize from "sequelize";

const { Region, City } = db;
class DeliveryController {
  static async createRegion(req, res) {
    try {
      const { name } = req.body;
      const region = await Region.create({ name });

      return res
        .status(201)
        .send({ message: "Operation successful", data: region });
    } catch (error) {
      throw new Error(error);
    }
  }
  static async getRegions(req, res) {
    try {
      const regions = await Region.findAll({
        include: [{ model: City, as: "cities", attributes: [] }],
        attributes: [
          ["id", "regionId"],
          ["name", "region"],
          [Sequelize.fn("count", Sequelize.col("Region.id")), "count"],
        ],
        group: ["Region.name", "Region.id"],
      });
      res.status(200).send({ message: "Operation successful", data: regions });
    } catch (error) {
      throw new Error(error);
    }
  }
  static async createCity(req, res) {
    try {
      const { cities, regionId } = req.body;
      const data = cities.map((item) => ({ name: item, regionId }));
      const city = await City.bulkCreate(data);

      return res
        .status(201)
        .send({ message: "Operation successful", data: city });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default DeliveryController;
