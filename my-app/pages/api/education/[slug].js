import { db } from "/utils/db-connection.js";

export default async function handler(req, res) {
  const { slug } = req.query;
  const sqlQuery = "SELECT * FROM education WHERE id = ?";

  try {
    const connection = await db();

    const [education] = await connection.execute(sqlQuery, [slug]);

    if (education.length === 0) {
      return res.status(404).json({ message: "Education not found" });
    }

    res.status(200).json({
      education: education[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching education" });
  }
}
