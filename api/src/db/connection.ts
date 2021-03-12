import { Sequelize } from "sequelize-typescript";
// import accessEnv from '../helpers/accessEnv';
import models from "./models";

// const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env //accessEnv("DB_USER", "DB_PASSWORD", "DB_HOST", "DB_NAME")
// const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,{
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
  {
    dialectOptions: {
      charset: "utf8",
      multipleStatements: true,
    },
    logging: false,
    models,
  }
);

sequelize.sync({ force: true });

export default sequelize;
