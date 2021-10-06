import App from "../helpers";

class AuthMiddleWare {
  static async verifyToken(req, res, next) {
    try {
      const header = req.headers["authorization"];
      if (!header) {
        const ParamToken = req.query.token
        if (!ParamToken) {
          res.status(406).send({ message: "Authorization failed" });
        }
        const user = await App.decodeToken(ParamToken);
        req.user = user;
        next();
      } else {
        // const token = req.headers["authorization"];
        const token = req.headers.authorization.split(' ')[1]
        const user = await App.decodeToken(token);
        req.user = user;
        next();
      }
    } catch (error) {
      res.status(406).send({ message: "Authorization failed" });
    }
  }

  static async verifyTokenByID(req, res, next) {
    try {
      const token = req.params.tokenId
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
