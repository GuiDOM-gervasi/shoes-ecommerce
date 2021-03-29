module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'Essentials',
						description: "Zapatillas de Adidas",
						price:7799,
						brandId: "1",
            detalleimg1:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/837aac06953e46949eb5aa4300a33c09_9366/Zapatillas_Advantage_Base_Blanco_EE7510_010_hover_standard.jpg',
            detalleimg2:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8fbd34863a354229bf6aaa3b0110910c_9366/Zapatillas_Advantage_Base_Blanco_EE7510_02_standard.jpg',
            detalleimg3:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/33b805d5315a4852aabdaa3b0110bf9c_9366/Zapatillas_Advantage_Base_Blanco_EE7510_41_detail.jpg',
						muestraimg:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/127dee93a5a64100865eaa4300b2edb1_9366/Zapatillas_Advantage_Base_Blanco_EE7692_01_standard.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'ZX',
						description:"Zapatillas de Adidas",
						price:17499,
						brandId:"1",
            detalleimg1:'https://assets.adidas.com/images/w_600,f_auto,q_auto/80f4a6122a294a2684eaac5200d5eea9_9366/Zapatillas_ZX_2K_Boost_Blanco_FV9996.jpg',
            detalleimg2:'https://assets.adidas.com/images/w_600,f_auto,q_auto/6bdd2864a71a4301abcdac5200d5efe2_9366/Zapatillas_ZX_2K_Boost_Blanco_FV9996.jpg',
            detalleimg3:'https://assets.adidas.com/images/w_600,f_auto,q_auto/3188cac9629f472a8104ac5200d5ef49_9366/Zapatillas_ZX_2K_Boost_Blanco_FV9996.jpg',
						muestraimg:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a00e176273414e2d986babc90099fa3e_9366/Zapatillas_ZX_2K_Boost_Blanco_FV9996_01_standard.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Tailwind 79 World Wide',
						description: "Zapatillas de Nike",
						price:9779,
						brandId:"2",
            detalleimg1:'https://www.thepoint.es/16026-thickbox_default/nike-air-tailwind-79-marron-barroco-negro.jpg',
            detalleimg2:'https://www.thepoint.es/16027-thickbox_default/nike-air-tailwind-79-marron-barroco-negro.jpg',
            detalleimg3:'https://www.thepoint.es/16028-thickbox_default/nike-air-tailwind-79-marron-barroco-negro.jpg',
						muestraimg: "https://www.thepoint.es/17259-thickbox_default/nike-tailwind-79-world-wide-.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Air Max 270 React World Wide',
						description:"Zapatillas de Nike",
						price:3349,
						brandId:"2",
            detalleimg1:'https://www.innvictus.com/medias/tenis-nike-air-max-270-react-worldwide-pack-white-in-CK6457-100-2.png?context=bWFzdGVyfGltYWdlc3w4NzU3MnxpbWFnZS9wbmd8aW1hZ2VzL2g1Mi9oY2EvOTczMDk0MjIwNTk4Mi5wbmd8YWFlZWU4Nzg0ZDEwNTMwNzg4MTE2ZTc0NjlkOWM1OTkwZGFjZjFmYzE0ZWI1ZDg3MGMwMDkyMzkwYzg4NjlhNA',
            detalleimg2:'https://www.innvictus.com/medias/tenis-nike-air-max-270-react-worldwide-pack-white-in-CK6457-100-4.png?context=bWFzdGVyfGltYWdlc3w1MjA3MXxpbWFnZS9wbmd8aW1hZ2VzL2hiMC9oYzIvOTczMDk0MDQzNjUxMC5wbmd8ZTVjMTIyMTA4MTAxNjZiZjg3MGZkZDFiZjdmNmI1NDU3NzkxODFjZjNjMGI5YWU4MDg4NjU0NjRhMzE1ZjZjYg',
            detalleimg3:'https://www.innvictus.com/medias/tenis-nike-air-max-270-react-worldwide-pack-white-in-CK6457-100-5.png?context=bWFzdGVyfGltYWdlc3w4OTE4NXxpbWFnZS9wbmd8aW1hZ2VzL2g2NC9oOGIvOTczMDkzOTI1Njg2Mi5wbmd8YTk2NDcyZjE3ZGExNGRjNDZiMDM3NDVkNzMxYTVjOTZjZGYyYWFiODVkMmMzYTBhOTFhM2U5YTU3ZGY4MzUwMA',
						muestraimg:"https://www.innvictus.com/medias/tenis-nike-air-max-270-react-worldwide-pack-white-in-CK6457-100-1.png?context=bWFzdGVyfGltYWdlc3w4NzU5MHxpbWFnZS9wbmd8aW1hZ2VzL2hmMi9oMTEvOTczMDk0MzA1Nzk1MC5wbmd8MzY4MTJjOWY5ZWY2ZDM2MmRhZTI0ZTYzMDNiNWMzZWMxMjgzMWZkYTM2MDI0MTAyYWIzYTYwN2E1OTZlNjA2ZA",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'INTV 96',
						description: "Zapatillas de Reebok",
						price:10999,
						brandId:"3",
            detalleimg1:'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/118711320_10157311472186697_6375280772276409448_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=iOArxwsIGAMAX95AMX5&_nc_ht=scontent-mad1-1.xx&oh=9aeec49b065da4d75fe29e137210c2ae&oe=6085CCE9',
            detalleimg2:'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/118724162_10157311472296697_2674887618382158421_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=vxaqUZxCpMkAX8JVqxC&_nc_ht=scontent-mad1-1.xx&oh=348ac5569ec2bbae87e5432ba6f48bac&oe=60884537',
            detalleimg3:'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/118569696_10157311472261697_418207857284828925_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=PALfX2rj0uIAX_cHX1z&_nc_ht=scontent-mad1-1.xx&oh=98d3c9147bed11f8858e316bee51082f&oe=6087B14D',
						muestraimg:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ed7ae5f731314489a87cab18001abda8_9366/Zapatillas_INTV_96_Negro_FV5477_01_standard.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'CLUB C 85',
						description: "Zapatillas de Reebok",
						price:12499,
						brandId:"3",
            detalleimg1:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4e42db7c25b04fb09edcaa94011d26df_9366/Club_C_85_Blanco_AR0455_03_standard.jpg',
            detalleimg2:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d79703810e084c45815baa94011a7501_9366/Club_C_85_Blanco_AR0455_04_standard.jpg',
            detalleimg3:'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/591eff428fd94223861fa79901800d34_9366/Club_C_85_Blanco_AR0455_41_detail.jpg',
						muestraimg:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f543bd647daa4d4b8b31ab04013f00a8_9366/Zapatillas_Club_C_85_Blanco_FX4011_01_standard.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'X-RAY LITE',
						description: "Zapatillas de Puma",
						price:7800,
						brandId:"4",
            detalleimg1:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1750,h_1750/global/374122/01/fnd/EEA/fmt/png/Zapatillas-X-Ray-Lite',
            detalleimg2:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1750,h_1750/global/374122/01/sv02/fnd/EEA/fmt/png/Zapatillas-X-Ray-Lite',
            detalleimg3:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1750,h_1750/global/374122/01/sv04/fnd/EEA/fmt/png/Zapatillas-X-Ray-Lite',
						muestraimg:"https://essential.vteximg.com.br/arquivos/ids/411033-1000-1000/961-1328_1.jpg?v=637509984833930000",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'X RAY SQUARE',
						description: "Zapatillas de Puma",
						price:8999,
						brandId:"4",
            detalleimg1:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1750,h_1750/global/373108/07/fnd/EEA/fmt/png/Zapatillas-X-Ray-2-Square',
            detalleimg2:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1750,h_1750/global/373108/07/bv/fnd/EEA/fmt/png/Zapatillas-X-Ray-2-Square',
            detalleimg3:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1750,h_1750/global/373108/07/sv04/fnd/EEA/fmt/png/Zapatillas-X-Ray-2-Square',
						muestraimg:"https://essential.vteximg.com.br/arquivos/ids/350375-1000-1000/961-1167_1.jpg?v=637358609170530000",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Chuck Taylor All Star Crater',
						description: "Zapatillas de Coverse",
						price:14999,
						brandId:"5",
            detalleimg1:'https://www.converse.com.ar/wp-content/uploads/2021/03/Converse_360PDP_168600C_Shot2.jpg',
            detalleimg2:'https://www.converse.com.ar/wp-content/uploads/2021/03/Converse_360PDP_168600C_Shot5.jpg',
            detalleimg3:'https://www.converse.com.ar/wp-content/uploads/2021/03/Converse_360PDP_168600C_Shot3.jpg',
						muestraimg:"https://www.converse.com.ar/wp-content/uploads/2021/03/Converse_360PDP_168600C_Standard-768x768.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Chuck Taylor All Star',
						price:7195,
						brandId:"5",
						description:"Zapatillas de Coverse",
            detalleimg1:'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatilla-converse-chuck-taylor-all-star-ox-mujer-negra-27329731-200010569175001-2.jpg',
            detalleimg2:'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatilla-converse-chuck-taylor-all-star-ox-mujer-negra-27329731-200010569175001-6.jpg',
            detalleimg3:'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatilla-converse-chuck-taylor-all-star-ox-mujer-negra-27329731-200010569175001-4.jpg',
						muestraimg: "https://www.converse.com.ar/wp-content/uploads/2021/01/Converse_360PDP_2Shot1-3-768x768.jpg",
      createdAt: new Date(),
      updatedAt: new Date() 
    },{
      name: 'Woodburn II Waterproof',
						description:"Zapatillas de Columbia",
						price:20187,
						brandId:"6",
            detalleimg1:'https://img01.ztat.net/article/spp-media-p1/ad61f1b833b0306fa7a81852dbfe3644/4a85d7e12d5840f381c1a2ecf0fefa7d.jpg?imwidth=1800',
            detalleimg2:'https://img01.ztat.net/article/spp-media-p1/41959e9036a13b82b99f2a596bcb4529/a4621497065b49c3b5708ceffb6c57a7.jpg?imwidth=1800',
            detalleimg3:'https://img01.ztat.net/article/spp-media-p1/49c00327e69534f2b7d75cf6e978b71d/f0cfe5b57ac64371b4d7914e8810142c.jpg?imwidth=1800',
						muestraimg:"https://columbiasportswear.com.ar/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/b/l/black_caramel_1.jpeg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Mountain Masochist™ III Outdry',
						price: 25738,
						description: "Zapatillas de Columbia",
						brandId:"6",
            detalleimg1:'https://www.trekkinn.com/f/13636/136364856_2/columbia-mountain-masochist-iii-outdry.jpg',
            detalleimg2:'https://www.trekkinn.com/f/13636/136364856/columbia-mountain-masochist-iii-outdry.jpg',
            detalleimg3:'https://www.trekkinn.com/f/13636/136364856_3/columbia-mountain-masochist-iii-outdry.jpg',
						muestraimg:"https://columbiasportswear.com.ar/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/m/a/maso_1.jpeg",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
