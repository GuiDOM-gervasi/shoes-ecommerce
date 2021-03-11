import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table
} from "sequelize-typescript";

export interface UserAttributes {
  id?: string;
  firstName: string;
}

export interface ProductAttributes {
  id?: string;
  name: string;
  description: string;
  price: number;
}

export interface CategoryAttributes {
  id?: string;
  name: string;
}

@Table({
  defaultScope:{
    attributes: {exclude: ['deleteAt']}
  },
  paranoid: true,
  tableName: 'products'
})

export class Product extends Model<ProductAttributes>{
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

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  description: string;

  @Column({
    allowNull: false,
    type: DataType.FLOAT
  })
  price!: number;

}

//--------------------------------------------------------------------------------------------
@Table({
  defaultScope:{
    attributes: {exclude: ['deleteAt']}
  },
  paranoid: true,
  tableName: 'users'
})

export class User extends Model<UserAttributes>{  
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
  firstName!: string;

}
//--------------------------------------------------------------------------------------------

@Table({
  defaultScope:{
    attributes: {exclude: ['deleteAt']}
  },
  paranoid: true,
  tableName: 'categories'
})

export class Category extends Model<CategoryAttributes>{  
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

}

export default [User, Product, Category];
