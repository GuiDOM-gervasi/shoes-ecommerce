import Product from "../../../db/models/products";
import { Op } from "sequelize";

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
  });
  return searchProduct;
};

export default searchProduct;
