import {
  Column,
  DataType,
  Model,
  BelongsToMany,
  ForeignKey,
  HasOne,
  HasMany,
  Table
} from "sequelize-typescript";
import Product from "./products";
import Cart from './carts';
import {WishList} from './wishlist';
import {Review} from "./review";

import { UserAttributes, ReviewAttributes } from './types'

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
    unique: true,
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
    unique: true,
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
  count: any;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
  })
  nlsuscribe?: Boolean;

  @HasOne(() => Cart)
  cartId!: Cart;

  // @Column({
  //   allowNull: true,
  //   type: DataType.BOOLEAN,
  // })

  @HasMany(() => Review)
  reviews: ReviewAttributes[]

  @BelongsToMany(() => Product, { through: () => WishList })
  products?: Array<Product & { WishList: WishList }>;
}

export default User
