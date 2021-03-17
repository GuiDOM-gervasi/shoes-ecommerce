import { Sequelize } from "sequelize-typescript";
import Category from "../../../db/models/category";

const deleteCategoryResolver = async (parent, args, context, info) => {

  await Category.destroy({ where: { id: args.id } })

}

export default deleteCategoryResolver;
