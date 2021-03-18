import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
  } from "sequelize-typescript";
import Cart from "./carts";
  
  import Product from './products'
  
  // Definitions of tables and sequelize models
  // Table cartproduct
  @Table({
    defaultScope: {
      attributes: { exclude: ["deleteAt"] },
    },
    paranoid: true,
    tableName: "cartproduct",
  })
  export class CartProduct extends Model {
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
    @ForeignKey(() => Cart)
    cartId!: string;
    
    @Column({
      allowNull: false,
      type: DataType.INTEGER,
    })
    @ForeignKey(() => Product)
    productId!: string;
    
    @Column({
      allowNull: true,
      type: DataType.INTEGER
    })
    quantity?: number;

    @Column({
        allowNull: true,
        type: DataType.FLOAT
      })
    price?: number;

  }
  

  
  export default CartProduct
