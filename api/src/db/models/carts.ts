import {
    BelongsToMany,
    Table,
    Column,
    DataType,
    Model,
    BelongsTo,
    ForeignKey
} from 'sequelize-typescript';
import CartProduct from './cartproduct';

import Product from './products';
import { CartAttributes } from './types';
import User from './users';

@Table({
    defaultScope:{
        attributes:{
            exclude: ["deleteAt"]
        },
    },
    paranoid: true,
    tableName: 'carts',
})
export class Cart extends Model<CartAttributes> {
    @Column({
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER,
    })
    id?: string;

    @Column({
        allowNull: false,
        type: DataType.ENUM('reserved','payed','finish'),
    })
    state!: string;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    @ForeignKey(() => User)
    userId: string;
    @BelongsTo(() => User)
    user: User;

    @BelongsToMany(() => Product, { through: () => CartProduct })
    products?: Array<Product & { CartProduct: CartProduct }>;
}
  
export default Cart;