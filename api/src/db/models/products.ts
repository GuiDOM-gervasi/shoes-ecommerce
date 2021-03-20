import {
  BelongsToMany,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  Unique,
} from "sequelize-typescript";


import ProductCategory from "./productcategory";
import Brand from "./brands";
import Category from "./category";
import Models from './models'
import ProductModel from './productmodel'
import User from "./users";
import {WishList} from "./wishlist";



@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "products",
})
export class Product extends Model {
  //<ProductAttributes>
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id?: string;

  @Unique
  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    allowNull: false,
    type: DataType.TEXT,
  })
  description?: string;

  @Column({
    allowNull: false,
    type: DataType.FLOAT,
  })
  price!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Brand)
  brandId!: string;

  @BelongsTo(() => Brand)
  brand!: Brand;

  @BelongsToMany(() => Category, { through: () => ProductCategory })
  categories?: Array<Category & { ProductCategory: ProductCategory }>;

  @BelongsToMany(() => Models, { through: () => ProductModel })

  models: Array<Models & { ProductModels: ProductModel }>;

 

  @BelongsToMany(() => User, { through: () => WishList })
  users?: Array<User & { WishList: WishList }>;

}

export default Product;
