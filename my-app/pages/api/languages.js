import { db } from "/utils/db-connection.js";

export default async function handler(req, res) {
  try {
    const connection = await db();
    const [rows] = await connection.execute("SELECT * FROM languages");
    res.status(200).json({ languages: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching data from the database" });
  }
}
