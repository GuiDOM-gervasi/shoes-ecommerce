import {
  BelongsToMany,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";

import ProductCategory from './productcategory'
import Brand from './brands'
import Category from './category'


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

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  description: string;

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
  categories: Array<Category & { ProductCategory: ProductCategory }>;
}

export default Product