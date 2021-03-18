import {
    BelongsToMany,
    Table,
    Column,
    DataType,
    Model
} from 'sequelize-typescript';

import Product from './products';
import ProductModel from './productmodel';

import {ModelAttributes} from './types';

@Table({
    defaultScope:{
        attributes:{
            exclude: ["deleteAt"]
        },
    },
    paranoid: true,
    tableName: 'models',
})
export class Models extends Model<ModelAttributes> {
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
    size!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
      })
      color!: string;
  
    @BelongsToMany(() => Product, { through: () => ProductModel })
    products?: Array<Product & { ProductModel: ProductModel }>;
  }
  
  export default Models