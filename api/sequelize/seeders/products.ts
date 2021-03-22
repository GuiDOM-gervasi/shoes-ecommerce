module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'Essentials',
						description: "Zapatillas de Adidas",
						price:7799,
						brandId: "1",
						muestraimg:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/127dee93a5a64100865eaa4300b2edb1_9366/Zapatillas_Advantage_Base_Blanco_EE7692_01_standard.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'ZX',
						description:"Zapatillas de Adidas",
						price:17499,
						brandId:"1",
						muestraimg:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a00e176273414e2d986babc90099fa3e_9366/Zapatillas_ZX_2K_Boost_Blanco_FV9996_01_standard.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Tailwind 79 World Wide',
						description: "Zapatillas de Nike",
						price:9779,
						brandId:"2",
						muestraimg: "https://www.thepoint.es/17259-thickbox_default/nike-tailwind-79-world-wide-.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Air Max 270 React World Wide',
						description:"Zapatillas de Nike",
						price:3349,
						brandId:"2",
						muestraimg:"https://www.innvictus.com/medias/tenis-nike-air-max-270-react-worldwide-pack-white-in-CK6457-100-1.png?context=bWFzdGVyfGltYWdlc3w4NzU5MHxpbWFnZS9wbmd8aW1hZ2VzL2hmMi9oMTEvOTczMDk0MzA1Nzk1MC5wbmd8MzY4MTJjOWY5ZWY2ZDM2MmRhZTI0ZTYzMDNiNWMzZWMxMjgzMWZkYTM2MDI0MTAyYWIzYTYwN2E1OTZlNjA2ZA",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'INTV 96',
						description: "Zapatillas de Reebok",
						price:10999,
						brandId:"3",
						muestraimg:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ed7ae5f731314489a87cab18001abda8_9366/Zapatillas_INTV_96_Negro_FV5477_01_standard.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'CLUB C 85',
						description: "Zapatillas de Reebok",
						price:12499,
						brandId:"3",
						muestraimg:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f543bd647daa4d4b8b31ab04013f00a8_9366/Zapatillas_Club_C_85_Blanco_FX4011_01_standard.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'X-RAY LITE',
						description: "Zapatillas de Puma",
						price:7800,
						brandId:"4",
						muestraimg:"https://essential.vteximg.com.br/arquivos/ids/411033-1000-1000/961-1328_1.jpg?v=637509984833930000",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'X RAY SQUARE',
						description: "Zapatillas de Puma",
						price:8999,
						brandId:"4",
						muestraimg:"https://essential.vteximg.com.br/arquivos/ids/350375-1000-1000/961-1167_1.jpg?v=637358609170530000",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Chuck Taylor All Star Crater',
						description: "Zapatillas de Coverse",
						price:14999,
						brandId:"5",
						muestraimg:"https://www.converse.com.ar/wp-content/uploads/2021/03/Converse_360PDP_168600C_Standard-768x768.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Chuck Taylor All Star',
						price:7195,
						brandId:"5",
						description:"Zapatillas de Coverse",
						muestraimg: "https://www.converse.com.ar/wp-content/uploads/2021/01/Converse_360PDP_2Shot1-3-768x768.jpg",
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      name: 'Woodburn II Waterproof',
						description:"Zapatillas de Columbia",
						price:20187,
						brandId:"6",
						muestraimg:"https://columbiasportswear.com.ar/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/b/l/black_caramel_1.jpeg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Mountain Masochist™ III Outdry',
						price: 25738,
						description: "Zapatillas de Columbia",
						brandId:"6",
						muestraimg:"https://columbiasportswear.com.ar/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/m/a/maso_1.jpeg",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
