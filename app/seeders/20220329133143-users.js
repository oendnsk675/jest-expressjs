'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        name: "osi",
        username: "osi_nineteen",
        email: "sayidinaahmadalqososyi@gmail.com",
        password: bcrypt.hashSync("osicozycozy", 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dawi",
        username: "badawi",
        email: "badawi@gmail.com",
        password: bcrypt.hashSync("badawi12345", 8),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
