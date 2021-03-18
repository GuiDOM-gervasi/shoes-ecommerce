import {
  BelongsToMany,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  Unique,
  HasOne,
  HasMany
} from "sequelize-typescript";

import ProductCategory from './productcategory'
import Brand from './brands'
import Category from './category'

import Models from './models'
import ProductModel from './productmodel'
import User from "./users";
import {WishList} from "./wishlist";
import Cart from "./carts";
import CartProduct from "./cartproduct";


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

  @HasMany(() => ProductModel,'productId')  

  @BelongsToMany(() => Category, { through: () => ProductCategory })
  categories?: Array<Category & { ProductCategory: ProductCategory }>;

  @BelongsToMany(() => Models, { through: () => ProductModel })
  models?: Array<Models & { ProductModels: ProductModel }>;

  @BelongsToMany(() => User, { through: () => WishList })
  users?: Array<User & { WishList: WishList }>;

  // @BelongsToMany(() => Cart, { through: () => CartProduct })
  // carts?: Array<Cart & { CartProduct: CartProduct }>;
}

export default Product
