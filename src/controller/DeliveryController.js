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
  static async deleteRegionById(req, res) {
    try {
      const { id } = req.params;

      await City.destroy({ where: { regionId: id } });
      await Region.destroy({
        where: { id },
        cascade: true,
      });
      res.status(200).send({ message: "Region deleted successfully" });
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

  static async getRegionWithCities(req, res) {
    try {
      const regions = await Region.findAll({
        include: [{ model: City, as: "cities" }],
      });
      res.status(200).send({ message: "Operation successful", data: regions });
    } catch (error) {
      throw new Error(error);
    }
  }
  static async updateRegionByID(req, res) {
    try {
      const regionId = req.params.id;

      const { name, cities } = req.body;

      const region = await Region.findOne({ where: { id: regionId } });
      if (!region)
        return res.status(404).send({ message: `No Such Region found` });

      await Region.update({ name }, { where: { id: regionId } });

      if (cities) {
        const newCitiesToAdd = [];

        const citiesToRemove = [];

        const citiesBelongingToRegion = await City.findAll({
          where: { regionId },
        });

        citiesBelongingToRegion.forEach((element) => {
          if (!cities.includes(element.name)) {
            citiesToRemove.push(element);
          }
        });

        cities.forEach((element) => {
          const city = citiesBelongingToRegion.find(
            (item) => item.name.toLowerCase() === element.toLowerCase()
          );
          if (!city) newCitiesToAdd.push({ name: element, regionId });
        });

        await City.destroy({
          where: {
            id: citiesToRemove.map((item) => item.id),
            regionId,
          },
        });

        await City.bulkCreate(newCitiesToAdd);
      }

      res.status(201).send({ message: "Region successfully updated" });
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
