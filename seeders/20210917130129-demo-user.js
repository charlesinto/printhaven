"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
    await queryInterface.bulkDelete(
      "Users",
      {
        email: "john.doe@yahoo.com",
      },
      {}
    );

    const hash = bcrypt.hashSync("admin123!", 8);

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "john.doe@yahoo.com",
          firstName: "John",
          lastName: "Doe",
          password: hash,
          phoneNumber: "07010671710",
          role: "SUPER ADMIN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      "Users",
      {
        email: "john.doe@yahoo.com",
      },
      {}
    );
  },
};
