module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
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
    },{
						firstName:"Ernesto",
						lastName:"Ramirez Guitierrez",
						userName:"Ernesto1234",
						isAdmin:false,
						email:"ernestoramirez@gmail.com",
						password:"12345",
						nlsuscribe:false,
						count:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
						firstName:"Lautaro",
						lastName:"Hererra De Santos",
						userName:"LautaroHerreta44",
						isAdmin:false,
						email:"lautoraherrera@gmail.com",
						password:"12345",
						nlsuscribe:false,
						count:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
