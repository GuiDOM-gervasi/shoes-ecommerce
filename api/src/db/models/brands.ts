import {
  Column,
  DataType,
  HasMany,
  Model,
  Table
} from "sequelize-typescript";

import Product from './products'
import { BrandAttributes } from './types'

@Table({
  defaultScope:{
    attributes: {exclude: ['deleteAt']}
  },
  paranoid: true,
  tableName: 'brands'
})

export class Brand extends Model<BrandAttributes>{
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id?: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @HasMany (() => Product)
  products!:Product[]

}


export default Brand