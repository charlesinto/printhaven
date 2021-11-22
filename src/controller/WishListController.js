import db from "../../models";
import App from "../helpers";

const wishList = db.wishList;

class WishListController {

    static async createWishList(req, res) {
        try {
            const { quantity, productId } = req.body;
            const wishListExist = await wishList.findOne({ where: { productId, userId: req.user.id } });
            if (wishListExist) {
                wishListExist.quantity = quantity
                await wishListExist.save()
                return res.status(200).send({ message: "Successful", wishListExist });
            }

            const WishList = await wishList.create({
                productId,
                quantity,
                userId: req.user.id
            });

            return res.status(200).send({ message: "Successful", WishList });
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getAllWishList(req, res) {
        try {
            const WishList = await wishList.findAll({
                where: { userId: req.user.id },
                include: "product",
            });
            if (!WishList.length)
                return res.status(200).send({ message: "User has no WishList records", WishList: [] });
            return res.status(200).send({ message: "Successful", WishList });
        } catch (error) {
            throw new Error(error);
        }
    }


    static async deleteWishList(req, res) {
        try {
            const id = req.params.WishListId
            const WishList = await wishList.destroy({ where: { id, userId: req.user.id } });
            if (!WishList)
                return res.status(409).send({ message: "User has no such WishList" });
            return res.status(200).send({ message: "WishList deleted Successfully" });
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default WishListController;
