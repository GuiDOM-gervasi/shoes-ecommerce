import {
  Column,
  DataType,
  Model,
  BelongsToMany,
  ForeignKey,
  HasOne,
  Table
} from "sequelize-typescript";
import Product from "./products";
import Cart from './carts';
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
    allowNull: true,
    type: DataType.BOOLEAN,
  })
  nlsuscribe?: Boolean;

  @HasOne(() => Cart)
  cartId!: Cart;

  @BelongsToMany(() => Product, { through: () => WishList })
  products?: Array<Product & { WishList: WishList }>;

}

export default User