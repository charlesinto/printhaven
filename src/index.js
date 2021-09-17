require("dotenv").config();

const { sequelize } = require("./boostrap")();

const { stream, logger } = require("./logger/winston");
const morgan = require("morgan");
const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 3005;

const app = express();
const server = http.createServer(app);

app.use(morgan("combined", { stream: stream }));

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    app.get("/", (req, res) => {
      res.send("welcome to backend");
    });

    app.use(function (err, req, res, next) {
      logger.error(err.stack ? err.stack : err);

      res.status(500).send({
        message: `Something broke!. Check application logs for helpful tips. OriginalUrl: ${req.originalUrl}  `,
      });
    });
    server.listen(PORT, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = app;
