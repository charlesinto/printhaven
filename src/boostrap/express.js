import authRoute from "../routes/authRoute";
<<<<<<< HEAD
import addressRoute from "../routes/addressRoute";

=======
import categoryRoute from "../routes/categoryRoute";
import productRoute from "../routes/productRoute";
>>>>>>> origin/master
import { logger } from "../logger/winston";

const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = function () {
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use("/api/v1/auth", authRoute);
<<<<<<< HEAD
  app.use("/api/v1/address", addressRoute);

=======

  app.use("/api/v1/category", categoryRoute);
  app.use("/api/v1/product", productRoute);
>>>>>>> origin/master
  app.get("/", (req, res) => {
    res.send("welcome to backend");
  });

  app.use(function (err, req, res, next) {
    logger.error(err.stack ? err.stack : err);

    res.status(500).send({
      mesage: err.stack ? err.stack : err,
      description: `Something broke!. Check application logs for helpful tips. OriginalUrl: ${req.originalUrl}  `,
    });
  });
  //   server.listen(PORT, () => {
  //     console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  //   });

  return app;
};
