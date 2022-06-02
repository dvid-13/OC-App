import { config as dotenv } from "dotenv";
dotenv();

export const config = {
  host: process.env.HOST || "54.203.235.252",
  user: process.env.USER || "admin_IoT",
  password: process.env.PASS || "Liam2020&",
  database: process.env.DB || "admin_app",
  port: 3306,
  multipleStatements: true,
};
