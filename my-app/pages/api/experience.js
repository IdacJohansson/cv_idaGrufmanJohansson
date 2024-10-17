import { db } from "/utils/db-connection.js";

export default async function handler(req, res) {
  try {
    const connection = await db();
    const [languages] = await connection.execute("SELECT * FROM languages");
    const [education] = await connection.execute("SELECT * FROM education");

    res.status(200).json({ languages, education });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
}

// education: degree, institution, city, start_year, end_year
