import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table
  } from "sequelize-typescript";
  
  import Product from './products';
  import User from './users';
  
  // Definitions of tables and sequelize models
  // Table productcategory
  @Table({
    defaultScope: {
      attributes: { exclude: ["deleteAt"] },
    },
    paranoid: true,
    tableName: "wishlist",
  })
  export class WishList extends Model {
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
    @ForeignKey(() => User)
    userId: string;

  }

  export default WishList;