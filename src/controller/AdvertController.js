import db from "../../models";
import App from "../helpers";

const { HomePageBanner, HomePageBannerImages } = db;

class AdvertController {
  static async createHomePageBanner(req, res) {
    try {
      const payload = req.body;

      for (let i = 0; i < payload.length; i++) {
        const banner = await HomePageBanner.create(
          {
            banner: payload[i].banner,
            parentCategoryId: payload[i].parentCategoryId,
          },
          { raw: true }
        );

        for (let k = 0; k < payload[i].images.length; k++) {
          await HomePageBannerImages.create({
            imageUrl: payload[i].images[k],
            homePageBannerId: banner.id,
          });
        }
      }

      return res
        .status(201)
        .send({ message: "Banner(s) successfully created" });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getHomePageBanners(req, res) {
    try {
      const banners = await HomePageBanner.findAll({
        include: "bannerImages",
        attributes: {
          include: ["id", ["parentCategoryId", "linkToCategory"]],
          exclude: ["ParentCategoryId", "parentCategoryId"],
        },
      });

      return res
        .status(201)
        .send({ message: "Operation successful", data: banners });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default AdvertController;
