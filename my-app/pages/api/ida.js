import { db } from "/utils/db-connection.js";

export default async function handler(req, res) {
  try {
    const connection = await db();
    const [ida] = await connection.execute("SELECT * FROM ida");
    const [frontendEducation] = await connection.execute(
      "SELECT * FROM frontend_education"
    );

    res.status(200).json({ ida, frontendEducation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
}
