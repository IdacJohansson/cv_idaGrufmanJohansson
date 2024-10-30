import { db } from "/utils/db-connection.js";

export default async function handler(req, res) {
    try {
        const connection = await db();
        const [aboutMe] = await connection.execute("SELECT * FROM about_me");

        res.status(200).json({ aboutMe });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error" });
    }
}