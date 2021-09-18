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
  static assignToken(payload) {
    const token = jwt.sign(
      payload,
      process.env.SECRET_KEY || "charlesisawseosome"
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
}

export default App;
