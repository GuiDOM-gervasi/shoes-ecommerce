import {
  Column,
  DataType,
  Model,
  BelongsToMany,
  Table
} from "sequelize-typescript";
import Product from "./products";
import {WishList} from './wishlist';

import { UserAttributes } from './types'

@Table({
  defaultScope: {
    attributes: { exclude: ["deleteAt"] },
  },
  paranoid: true,
  tableName: "users",
})
export class User extends Model<UserAttributes> {
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
  firstName!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  lastName!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  userName!: string;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
  })
  isAdmin!: Boolean;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    validate:{
      isEmail: true
    }
  })
  email!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  password!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  count: Number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
  })
  nlsuscribe?: Boolean;

  @BelongsToMany(() => Product, { through: () => WishList })
  products?: Array<Product & { WishList: WishList }>;

}

export default User