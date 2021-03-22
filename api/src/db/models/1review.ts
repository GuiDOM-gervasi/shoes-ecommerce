import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";

import Product from './products'
import User from './users'
import {ReviewAttributes} from "./types"
// Definitions of tables and sequelize models
// Table productcategory
@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "review",
})
export class Review extends Model<ReviewAttributes>{
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
  productId!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  @ForeignKey(() => User)
  userId!: string;

  @Column({
  		allowNull: false,
  		type: DataType.FLOAT,
   })
  score!: string;

		@Column({
  		allowNull: false,
  		type: DataType.STRING,
   })
  title!: string;

		@Column({ 
  		allowNull: false,
  		type: DataType.STRING(1000),
   })
  description!: string;
}

  //delete inutil brand table

export default Review
