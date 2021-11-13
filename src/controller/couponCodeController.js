import db from "../../models";
import App from "../helpers";

const { couponCode } = db;

class couponCodeController {
    static async createCouponCode(req, res) {
        try {
            const { code, ...rest } = req.body;

            const codeExist = await couponCode.findOne({
                where: { code }
            });
            if (codeExist)
                return res.status(409).send({ message: "dublicate record" });
            const data = await couponCode.create({
                code,
                ...rest
            });
            return res.status(201).send({ message: "Successful", code: data });
        } catch (error) {
            throw new Error(error);
        }
    }


    static async getAllCouponCode(req, res) {
        try {
            const code = await couponCode.findAll();
            if (!code.length)
                return res.status(200).send({ code: [] });
            return res.status(200).send({ message: "Successful", code });
        } catch (error) {
            throw new Error(error);
        }
    }


    static async getCouponCode(req, res) {
        try {
            const id = req.params.codeId
            const code = await couponCode.findOne({ where: { id } });
            if (!code)
                return res.status(200).send({ code: [] });
            return res.status(200).send({ code });
        } catch (error) {
            throw new Error(error);
        }
    }

    static async activateAndDeactivateCouponCode(req, res) {
        try {
            const { isValid, } = req.body;
            const id = req.params.codeId
            const code = await couponCode.findOne({ where: { id } });
            if (code) {
                code.isValid = isValid
                await code.save()
                return res.status(200).send({ message: "Successful", code });
            }
            return res.status(404).send({ message: "record not found" })

        } catch (error) {
            throw new Error(error);
        }
    }

    static async updateCouponCode(req, res) {
        try {
            const { ...rest } = req.body;
            const id = req.params.codeId
            const codeExist = await couponCode.findOne({ where: { id } });
            if (!codeExist)
                return res.status(404).send({ message: "data not found" })

            const code = await couponCode.update({
                ...rest,
            }, { where: { id }, returning: true });
            return res.status(200).send({ message: "record updated Successful" });
        } catch (error) {
            throw new Error(error);
        }
    }

    static async applyCouponCode(req, res) {
        try {
            const { code, totalPrice } = req.body;
            const codeExist = await couponCode.findOne({ where: { code } });
            if (!codeExist)
                return res.status(404).send({ message: "Code Not Found'" })
            const {
                maxDiscount, expiresAt,
                usage, isValid, minDiscount,
                percentageDiscount, maxUsage
            } = codeExist
            const discount = App.discount(percentageDiscount, totalPrice)
            const codeExpired = App.checkExpirationTime(expiresAt)
            if (!isValid)
                return res.status(403).send({ message: "Invalid Code" })
            if (codeExpired)
                return res.status(200).send({ message: "Code Expired" })
            if (usage == maxUsage)
                return res.status(200).send({ message: "usage limit exceeded" })
            if (discount < minDiscount)
                return res.status(200).send({ message: "Successful", discount: 0 })
            if (discount >= maxDiscount)
                return res.status(200).send({ message: "Successful", discount: maxDiscount })
            if (discount >= minDiscount && discount < maxDiscount)
                return res.status(200).send({ message: "Successful", discount })

        } catch (error) {
            throw new Error(error);
        }
    }

    static async deleteCouponCode(req, res) {

        try {
            const id = req.params.codeId
            const code = await couponCode.destroy({ where: { id } });
            if (!code)
                return res.status(409).send({ message: "data not exist" });
            return res.status(200).send({ message: "record deleted Successfully" });
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default couponCodeController;
