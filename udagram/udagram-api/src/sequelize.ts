import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
import * as fs from "fs";
import * as path from "path";

const isRDS = config.host?.endsWith(".rds.amazonaws.com");

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: "postgres",
  port: 5432,

  dialectOptions: isRDS
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: true,
          ca: fs.readFileSync(
            path.join(__dirname, "global-bundle.pem"),
            "utf8"
          ),
        },
      }
    : {},
});