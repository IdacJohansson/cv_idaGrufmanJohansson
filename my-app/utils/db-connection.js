import mysql from "mysql2/promise";

export async function db() {
  const connection = await mysql.createConnection(process.env.DB_CONNECTION);
  return connection;
}
