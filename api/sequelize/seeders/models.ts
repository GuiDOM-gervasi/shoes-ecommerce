module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('models', [{
						size:"45",
						color:"Blanco",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"45",
						color:"Negro",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"47",
						color:"Blanco",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"47",
						color:"Negro",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"41",
						color:"Blanco",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						size:"41",
						color:"Negro",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('models', null, {});
  }
};
