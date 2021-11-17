import db from "../../models";
import App from "../helpers";
import MailService from "../service/MailService";

const contactUs = db.contactUs;

class contactUsController {

    static async createContactUs(req, res) {
        try {
            const { name, email, subject, description } = req.body;
            const contactus = await contactUs.create({
                name, email, subject, description
            });

            if (contactus) {
                const mail = new MailService(
                    email,
                    "support@splishpay.com",
                    subject,
                    "contactus",
                    {
                        name,
                        description,
                        email,
                    }
                );

                const feedbackmail = new MailService(
                    "noreply@relationgift.com",
                    email,
                    subject,
                    "feedback",
                    {
                        name
                    }
                );
                await mail.send();
                await feedbackmail.send();
                return res
                    .status(200)
                    .send({ message: "emal sent successfully to support center" });
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    static async getAllcontactUs(req, res) {
        try {
            const contactus = await contactUs.findAll({});
            if (!contactus.length)
                return res.status(200).send({ message: "No contact Us records", contactus: [] });
            return res.status(200).send({ message: "Successful", contactus });
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getContactUsById(req, res) {
        try {
            const id = req.params.id
            const contactus = await contactUs.findOne({
                where: { id }
            });
            if (!contactus)
                return res.status(200).send({ message: "No such contactUs id", contactus: [] });
            return res.status(200).send({ message: "Successful", contactus });
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default contactUsController;
