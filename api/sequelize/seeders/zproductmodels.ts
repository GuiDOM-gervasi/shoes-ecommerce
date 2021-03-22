module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('finalproducts', [{
						productId: "1",
						modelId:"1",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						productId:"1",
						modelId:"2",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"7",
						modelId:"3",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"2",
						modelId:"3",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"2",
						modelId:"5",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"8",
						modelId:"1",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"3",
						modelId:"4",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"3",
						modelId:"3",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"9",
						modelId:"6",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"4",
						modelId:"1",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"4",
						modelId:"6",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"10",
						modelId:"3",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"5",
						modelId:"5",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"5",
						modelId:"6",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"11",
						modelId:"2",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"6",
						modelId:"4",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"6",
						modelId:"5",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"12",
						modelId:"5",
						createdAt:new Date(),
						updatedAt:new Date()
				},]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('finalproducts', null, {});
  }
};
