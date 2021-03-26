module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cartproduct', [{
      cartId: 1,
      finalproductId: 1,
      quantity: 2,
      price: 5000,
      state: 'reserved',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      cartId: 1,    
      finalproductId: 2,
      quantity: 1,
      price: 7000,
      state: 'reserved',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      cartId: 1,    
      finalproductId: 3,
      quantity: 1,
      price: 7000,
      state: 'finish',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cartproduct', null, {});
  }
};
