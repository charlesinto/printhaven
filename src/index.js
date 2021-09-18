import "core-js/stable";
import "regenerator-runtime/runtime";
require("dotenv").config();

const { sequelize, app } = require("./boostrap")();

const { stream } = require("./logger/winston");
const morgan = require("morgan");

const PORT = process.env.PORT || 3005;

app.use(morgan("combined", { stream: stream }));

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully!");
    app.listen(PORT, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default app;
