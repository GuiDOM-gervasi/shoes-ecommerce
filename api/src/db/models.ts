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


export default [User];