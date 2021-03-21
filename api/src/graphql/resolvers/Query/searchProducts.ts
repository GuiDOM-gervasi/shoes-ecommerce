import Models from "./../../../db/models/models";
import ProductModels from "./../../../db/models/finalproduct";
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
    include: [Brand as any, Category as any, Models as any],
  });
  // const images = [];

  // const resultIds = await ProductModels.findAll({
  //   where: {
  //     productId: {
  //       [Op.in]: searchProduct.map((item) => item.id),
  //     },
  //   },
  // });
  // resultIds.forEach((item) => images.push(item.img));

  // searchProduct.forEach((item) => {
  //   item["img"] = images[0];
  //   images.shift();
  // });

  return searchProduct;
};

export default searchProduct;
