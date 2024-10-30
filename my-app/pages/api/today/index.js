import { db } from "/utils/db-connection.js";

export default async function handler(req, res) {
  try {
    const connection = await db();
    const [today] = await connection.execute("SELECT * FROM today");

    res.status(200).json({ today });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
}
