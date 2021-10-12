import authRoute from "../routes/authRoute";
import addressRoute from "../routes/addressRoute";
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
  app.use("/api/v1/address", addressRoute);

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
