import  Models  from './../../../db/models/models';
import  ProductModels  from './../../../db/models/productmodel';
import Product from "../../../db/models/products";
import { Op } from "sequelize";
import Category from "#root/db/models/category";
import Brand from "../../../db/models/brands";

const searchProduct = async (parent, args, context, info) => {
     // const Pm=ProductModel()
//   const search = await Product.findAll({
      
//   	where:{
// 	  name:args.name
// 	},
// 	include:[Models as any]
//  })
//  const array:any =search[0].models
//   //  await ProductModel.$get("img")
//   array.ProductModel?.forEach(item => {
//     console.log(item)
//   });
//   return search
  var convertName = [
    `%${args.name}%`,
    `%${args.name.toUpperCase()}%`,
    `%${args.name.toLowerCase()}%`,
  ];
  const searchProduct = await Product.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.like]: convertName[0] } },
        { name: { [Op.like]: convertName[1] } },
        { name: { [Op.like]: convertName[2] } },
      ],
    },
    include: [Brand as any, Category as any,Models as any],
  }).then(async (result)=> {
  
    const resultIds = await ProductModels.findAll({
      where:{
        productId:{
          [Op.in]: result.map(item => item.id)
        },
      }
    })
    resultIds.map(item => console.log(item.img))
  })
  return searchProduct;
};

export default searchProduct;
