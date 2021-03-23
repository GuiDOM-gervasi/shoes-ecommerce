module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('review', [{
						firstName:"Soy",
						lastName:"Admin",
						userName:"SoyAdmin",
						isAdmin:true,
						email:"soyadmin@admin.com",
						password:"12345",
						nlsuscribe:false,
						count: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('review', null, {});
  }
};
