module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('models', [{
						size:"45",
						color:"#ffffff",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"45",
						color:"#000000",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"47",
						color:"#ffffff",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"47",
						color:"#000000",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"41",
						color:"#ffffff",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"41",
						color:"#000000",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('models', null, {});
  }
};
