import db from "../../models";
import App from "../helpers";

const deliveryAddress = db.deliveryAddress;

class AddressController {

    static async createAddress(req, res) {
        try {
            const { streetAddress, phoneNumber, landmark, region, city, isDefaultAddress
            } = req.body;
            const AddressExist = await deliveryAddress.findOne({ where: { streetAddress, userId: req.user.id } });
            if (AddressExist)
                return res.status(409).send({ message: "User address exist" });
            const address = await deliveryAddress.create({
                streetAddress,
                landmark,
                phoneNumber,
                region,
                city,
                isDefaultAddress,
                userId: req.user.id
            });

            return res.status(200).send({ message: "Successful", address });
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getAllAddress(req, res) {
        try {
            const address = await deliveryAddress.findAll({ where: { userId: req.user.id } });
            if (!address.length)
                return res.status(409).send({ message: "User has no address records" });
            return res.status(200).send({ message: "Successful", address });
        } catch (error) {
            throw new Error(error);
        }
    }


    static async getAddress(req, res) {
        try {
            const id = req.params.addressId
            const address = await deliveryAddress.findOne({ where: { id, userId: req.user.id } });
            if (!address)
                return res.status(409).send({ message: "User has no such address" });
            return res.status(200).send({ message: "Successful", address });
        } catch (error) {
            throw new Error(error);
        }
    }

    static async updateAddress(req, res) {
        try {
            const id = req.params.addressId
            const { streetAddress, phoneNumber, landmark, region, city, isDefaultAddress
            } = req.body;

            const UserAddressExist = await deliveryAddress.findOne({ where: { id, userId: req.user.id } });
            if (!UserAddressExist)
                return res.status(409).send({ message: "User has no such address" });

            const address = await deliveryAddress.update({
                streetAddress,
                landmark,
                phoneNumber,
                region,
                city,
                isDefaultAddress,
                userId: req.user.id
            }, { where: { id, userId: req.user.id }, returning: true });

            return res.status(200).send({ message: "address updated Successful" });
        } catch (error) {
            throw new Error(error);
        }
    }

    static async deleteAddress(req, res) {
        try {
            const id = req.params.addressId
            const address = await deliveryAddress.destroy({ where: { id, userId: req.user.id } });
            if (!address)
                return res.status(409).send({ message: "User has no such address" });
            return res.status(200).send({ message: "address deleted Successfully" });
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default AddressController;
