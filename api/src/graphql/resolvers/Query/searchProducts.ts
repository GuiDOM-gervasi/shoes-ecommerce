import Product from "../../../db/models/products";
import { Op } from "sequelize";
import Category from "#root/db/models/category";
import Brand from "../../../db/models/brands";


const searchProduct = async (parent, args, context, info) => {
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
    include: [Brand as any, Category as any],
  });
  return searchProduct;
};

export default searchProduct;
