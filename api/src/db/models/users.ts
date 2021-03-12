import {
  Column,
  DataType,
  Model,
  Table
} from "sequelize-typescript";

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
}

export default User