import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table
} from "sequelize-typescript";

import Product from './products'
import Category from './category'
import { BrandAttributes } from './types'

// Definitions of tables and sequelize models
// Table productcategory
@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "productcategories",
})
export class ProductCategory extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id?: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Product)
  productId: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Category)
  categoryId: string;

  // @Column({
  //   allowNull: false,
  //   type: DataType.INTEGER.UNSIGNED
  // })
  // @ForeignKey(() => Brand)
  // brandId!: string;
}

@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "brands",
})
export class Brand extends Model<BrandAttributes> {
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

  @HasMany(() => Product)
  products!: Product[];
}

export default ProductCategory