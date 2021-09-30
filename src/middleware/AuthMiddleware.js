import App from "../helpers";

class AuthMiddleWare {
  static async verifyToken(req, res, next) {
    try {
      // const token = req.headers["authorization"];
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        return res.status(406).send({ message: "Authorization failed" });
      }
      const user = await App.decodeToken(token);
      req.user = user;
      next();
    } catch (error) {
      res.status(406).send({ message: "Authorization failed" });
    }
  }
}

export default AuthMiddleWare;
