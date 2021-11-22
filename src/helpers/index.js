import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class App {
  static hashPassword(password) {
    const hash = bcrypt.hashSync(password, 8);
    return hash;
  }
  static isPasswordEqual(plainPassword, hashPassword) {
    return bcrypt.compareSync(plainPassword, hashPassword);
  }
  static generateUUID() {
    return uuidv4();
  }
  static assignToken(payload, expiresTime) {
    const token = jwt.sign(
      payload,
      process.env.SECRET_KEY || "charlesisawseosome",
      {
        expiresIn: expiresTime ? expiresTime : "2h",
      }
    );
    return token;
  }
  static decodeToken(token) {
    return new Promise((resolve, reject) => {
      try {
        const decoded = jwt.verify(
          token,
          process.env.SECRET_KEY || "charlesisawesome"
        );
        resolve(decoded);
      } catch (error) {
        reject(error);
      }
    });
  }

  static checkExpirationTime(expirationTime) {

    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const currentTime = (new Date(Date.now() - tzoffset)).toISOString();

    try {
      if (new Date(currentTime).getTime() >= new Date(expirationTime).getTime())
        return true
      return false
    } catch (er) {
      throw new Error(er);

    }

  }

  static discount(percentageDiscount, totalPrice) {

    try {
      return percentageDiscount * totalPrice * 0.01
    } catch (er) {
      throw new Error(er);
    }
  }
}

export default App;
