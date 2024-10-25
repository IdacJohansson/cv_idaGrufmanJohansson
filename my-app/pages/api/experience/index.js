import { db } from "/utils/db-connection.js";

export default async function handler(req, res) {
  try {
    const connection = await db();
    const [languages] = await connection.execute("SELECT * FROM languages");
    const [education] = await connection.execute("SELECT * FROM education");
    const [employment] = await connection.execute("SELECT * FROM employment");
    const [technicalSkills] = await connection.execute(
      "SELECT * FROM technical_skills ORDER BY skill_name ASC;"
    );
    const [developmentExperience] = await connection.execute(
      "SELECT * FROM development_experience"
    );
    const [designTools] = await connection.execute(
      "SELECT * FROM design_tools"
    );
    const [additionalQualifications] = await connection.execute(
      "SELECT * FROM additional_qualifications"
    );

    res.status(200).json({
      languages,
      education,
      employment,
      technicalSkills,
      developmentExperience,
      designTools,
      additionalQualifications,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
}

// education: degree, institution, city, start_year, end_year
// employment: job_title, company, start_year, end_year
// development experience: lia, title, start_year,end_year
// technical skills: skill_type, skill_name, level_of_experience

// design tools: additional_qualification
// languages: languages
// additional_qualification: qualification
