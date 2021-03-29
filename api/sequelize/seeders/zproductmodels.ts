module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('finalproducts', [{
						productId: "1",
						modelId:"1",
						stock:"10",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						productId:"1",
						modelId:"2",
						stock:"10",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"7",
						modelId:"3",
						stock:"15",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"2",
						modelId:"3",
						stock:"5",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"2",
						modelId:"5",
						stock:"0",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"8",
						modelId:"1",
						stock:"10",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"3",
						modelId:"4",
						stock:"10",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"3",
						modelId:"3",
						stock:"24",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"9",
						modelId:"6",
						stock:"27",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"4",
						modelId:"1",
						stock:"1",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"4",
						modelId:"6",
						stock:"3",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"10",
						modelId:"3",
						stock:"33",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"5",
						modelId:"5",
						stock:"26",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"5",
						modelId:"6",
						stock:"42",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"11",
						modelId:"2",
						stock:"2",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"6",
						modelId:"4",
						stock:"0",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"6",
						modelId:"5",
						stock:"31",
						createdAt:new Date(),
						updatedAt:new Date()
				},{
						productId:"12",
						modelId:"5",
						stock:"16",
						createdAt:new Date(),
						updatedAt:new Date()
				},]); 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('finalproducts', null, {});
  }
};
