"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("plate_code_plate_sources", [
      { id: 1, plate_code_id: 19, plate_source_id: 2 },
      { id: 2, plate_code_id: 20, plate_source_id: 2 },
      { id: 3, plate_code_id: 21, plate_source_id: 2 },
      { id: 4, plate_code_id: 22, plate_source_id: 2 },
      { id: 5, plate_code_id: 23, plate_source_id: 2 },
      { id: 6, plate_code_id: 24, plate_source_id: 2 },
      { id: 7, plate_code_id: 25, plate_source_id: 2 },
      { id: 8, plate_code_id: 26, plate_source_id: 2 },
      { id: 9, plate_code_id: 27, plate_source_id: 2 },
      { id: 10, plate_code_id: 28, plate_source_id: 2 },
      { id: 11, plate_code_id: 29, plate_source_id: 2 },
      { id: 12, plate_code_id: 30, plate_source_id: 2 },
      { id: 13, plate_code_id: 31, plate_source_id: 2 },
      { id: 14, plate_code_id: 32, plate_source_id: 2 },
      { id: 15, plate_code_id: 33, plate_source_id: 2 },
      { id: 16, plate_code_id: 34, plate_source_id: 2 },
      { id: 17, plate_code_id: 35, plate_source_id: 2 },
      { id: 18, plate_code_id: 36, plate_source_id: 2 },
      { id: 19, plate_code_id: 37, plate_source_id: 2 },
      { id: 20, plate_code_id: 38, plate_source_id: 2 },
      { id: 21, plate_code_id: 39, plate_source_id: 2 },
      { id: 22, plate_code_id: 40, plate_source_id: 2 },
      { id: 23, plate_code_id: 41, plate_source_id: 2 },
      { id: 24, plate_code_id: 42, plate_source_id: 2 },
      { id: 25, plate_code_id: 43, plate_source_id: 2 },
      { id: 26, plate_code_id: 44, plate_source_id: 2 },
      { id: 27, plate_code_id: 45, plate_source_id: 3 },
      { id: 28, plate_code_id: 46, plate_source_id: 3 },
      { id: 29, plate_code_id: 47, plate_source_id: 3 },
      { id: 30, plate_code_id: 48, plate_source_id: 3 },
      { id: 31, plate_code_id: 19, plate_source_id: 4 },
      { id: 32, plate_code_id: 20, plate_source_id: 4 },
      { id: 33, plate_code_id: 21, plate_source_id: 4 },
      { id: 34, plate_code_id: 22, plate_source_id: 4 },
      { id: 35, plate_code_id: 23, plate_source_id: 4 },
      { id: 36, plate_code_id: 24, plate_source_id: 4 },
      { id: 37, plate_code_id: 26, plate_source_id: 4 },
      { id: 38, plate_code_id: 1, plate_source_id: 1 },
      { id: 39, plate_code_id: 2, plate_source_id: 1 },
      { id: 40, plate_code_id: 3, plate_source_id: 1 },
      { id: 41, plate_code_id: 4, plate_source_id: 1 },
      { id: 42, plate_code_id: 5, plate_source_id: 1 },
      { id: 43, plate_code_id: 6, plate_source_id: 1 },
      { id: 44, plate_code_id: 8, plate_source_id: 1 },
      { id: 45, plate_code_id: 9, plate_source_id: 1 },
      { id: 46, plate_code_id: 10, plate_source_id: 1 },
      { id: 47, plate_code_id: 11, plate_source_id: 1 },
      { id: 48, plate_code_id: 12, plate_source_id: 1 },
      { id: 49, plate_code_id: 13, plate_source_id: 1 },
      { id: 50, plate_code_id: 14, plate_source_id: 1 },
      { id: 51, plate_code_id: 15, plate_source_id: 1 },
      { id: 52, plate_code_id: 16, plate_source_id: 1 },
      { id: 53, plate_code_id: 17, plate_source_id: 1 },
      { id: 54, plate_code_id: 18, plate_source_id: 1 },
      { id: 55, plate_code_id: 1, plate_source_id: 5 },
      { id: 56, plate_code_id: 2, plate_source_id: 5 },
      { id: 57, plate_code_id: 3, plate_source_id: 5 },
      { id: 58, plate_code_id: 4, plate_source_id: 5 },
      { id: 59, plate_code_id: 5, plate_source_id: 5 },
      { id: 60, plate_code_id: 6, plate_source_id: 5 },
      { id: 61, plate_code_id: 8, plate_source_id: 5 },
      { id: 62, plate_code_id: 9, plate_source_id: 5 },
      { id: 63, plate_code_id: 10, plate_source_id: 5 },
      { id: 64, plate_code_id: 11, plate_source_id: 5 },
      { id: 65, plate_code_id: 12, plate_source_id: 5 },
      { id: 66, plate_code_id: 13, plate_source_id: 5 },
      { id: 67, plate_code_id: 14, plate_source_id: 5 },
      { id: 68, plate_code_id: 15, plate_source_id: 5 },
      { id: 69, plate_code_id: 16, plate_source_id: 5 },
      { id: 70, plate_code_id: 17, plate_source_id: 5 },
      { id: 71, plate_code_id: 18, plate_source_id: 5 },
      { id: 72, plate_code_id: 1, plate_source_id: 6 },
      { id: 73, plate_code_id: 2, plate_source_id: 6 },
      { id: 74, plate_code_id: 3, plate_source_id: 6 },
      { id: 75, plate_code_id: 4, plate_source_id: 6 },
      { id: 76, plate_code_id: 5, plate_source_id: 6 },
      { id: 77, plate_code_id: 6, plate_source_id: 6 },
      { id: 78, plate_code_id: 8, plate_source_id: 6 },
      { id: 79, plate_code_id: 9, plate_source_id: 6 },
      { id: 80, plate_code_id: 10, plate_source_id: 6 },
      { id: 81, plate_code_id: 11, plate_source_id: 6 },
      { id: 82, plate_code_id: 12, plate_source_id: 6 },
      { id: 83, plate_code_id: 13, plate_source_id: 6 },
      { id: 84, plate_code_id: 14, plate_source_id: 6 },
      { id: 85, plate_code_id: 15, plate_source_id: 6 },
      { id: 86, plate_code_id: 16, plate_source_id: 6 },
      { id: 87, plate_code_id: 17, plate_source_id: 6 },
      { id: 88, plate_code_id: 18, plate_source_id: 6 },
      { id: 89, plate_code_id: 1, plate_source_id: 7 },
      { id: 90, plate_code_id: 2, plate_source_id: 7 },
      { id: 91, plate_code_id: 3, plate_source_id: 7 },
      { id: 92, plate_code_id: 4, plate_source_id: 7 },
      { id: 93, plate_code_id: 5, plate_source_id: 7 },
      { id: 94, plate_code_id: 6, plate_source_id: 7 },
      { id: 95, plate_code_id: 8, plate_source_id: 7 },
      { id: 96, plate_code_id: 9, plate_source_id: 7 },
      { id: 97, plate_code_id: 10, plate_source_id: 7 },
      { id: 98, plate_code_id: 11, plate_source_id: 7 },
      { id: 99, plate_code_id: 12, plate_source_id: 7 },
      { id: 100, plate_code_id: 13, plate_source_id: 7 },
      { id: 101, plate_code_id: 14, plate_source_id: 7 },
      { id: 102, plate_code_id: 15, plate_source_id: 7 },
      { id: 103, plate_code_id: 16, plate_source_id: 7 },
      { id: 104, plate_code_id: 17, plate_source_id: 7 },
      { id: 105, plate_code_id: 18, plate_source_id: 7 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("plate_code_plate_sources", null, {});
  },
};
