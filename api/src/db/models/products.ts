import {
  BelongsToMany,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  Unique,
  HasMany
} from "sequelize-typescript";

import ProductCategory from './productcategory'
import Brand from './brands'
import Category from './category'

import Models from './models'
import FinalProduct from './finalproduct'
import User from "./users";
import {WishList} from "./wishlist";
import { ProductAttributes } from "./types";
import { Image } from "./image";


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
    allowNull: true,
    type: DataType.STRING
  })
  muestraimg?: string;

  @HasMany (() => Image)
  img!: Image[]

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Brand)
  brandId!: string;

  @BelongsTo(() => Brand)
  brand!: Brand;

  @HasMany(() => FinalProduct)
  finalproducts!: FinalProduct[]

  @BelongsToMany(() => Category, { through: () => ProductCategory })
  categories?: Array<Category & { ProductCategory: ProductCategory }>;

  @BelongsToMany(() => Models, { through: () => FinalProduct })
  models?: Array<Models & { FinalProducts: FinalProduct }>;

  @BelongsToMany(() => User, { through: () => WishList })
  users?: Array<User & { WishList: WishList }>;

}

export default Product
