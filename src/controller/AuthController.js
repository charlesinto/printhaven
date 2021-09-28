import db from "../../models";
import App from "../helpers";
import MailService from "../service/MailService";

const User = db.User;

class AuthController {
  static async signUp(req, res) {
    try {
      const { firstName, lastName, password, phoneNumber, address, email } =
        req.body;

      const userExits = await User.findOne({ where: { email } });
      if (userExits)
        return res.status(409).send({ message: "User already exists" });

      const hashPassword = App.hashPassword(password);

      const user = await User.create({
        email,
        firstName,
        lastName,
        password: hashPassword,
        phoneNumber,
        address,
      });

      const mail = new MailService(
        "support@splishpay.com",
        email,
        "Welcome onBoard",
        "welcome",
        {}
      );

      await mail.send();

      const token = App.assignToken({ id: user.id, email: user.email });

      res.status(201).send({ message: "Successful", user, token });
    } catch (error) {
      throw new Error(error);
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user)
        return res
          .status(404)
          .send({ message: "Wrong email/password combination" });

      if (!App.isPasswordEqual(password, user.password))
        return res
          .status(404)
          .send({ message: "Wrong email/password combination" });

      const token = App.assignToken({ id: user.id, email: user.email });

      return res.status(200).send({ token, user });
    } catch (error) {
      throw new Error(error);
    }
  }
  static async resetPassword(req, res) {
    try {
      const { newPassword } = req.body;

      const userExits = await User.findOne({ where: { id: req.user.id } });
      if (userExits) return res.status(409).send({ message: "User not found" });

      if (!newPassword || newPassword.trim() === "")
        return res.status(406).send({ message: "newPassword is required" });

      const password = App.hashPassword(newPassword);

      await User.update({ password }, { where: { id: req.user.id } });

      res.status(200).send({ message: "Password updated successfully" });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default AuthController;
