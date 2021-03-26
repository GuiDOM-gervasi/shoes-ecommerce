module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('carts', [{
						userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('carts', null, {});
  }
};
