export async function fetchExperience() {
  const res = await fetch(`${process.env.DEVELOPMENT_API_URL}/api/experience`);
  if (!res.ok) throw new Error("Failed to fetch experience data");
  return await res.json();
}

export async function fetchEducationById(id) {
  const res = await fetch(
    `${process.env.DEVELOPMENT_API_URL}/api/education/${id}`
  );
  if (!res.ok) throw new Error("Failed to fetch education data");
  return await res.json();
}

export async function fetchAbout() {
  const res = await fetch (`${process.env.DEVELOPMENT_API_URL}/api/about`);
  if (!res.ok) throw new Error("Failed to fetch about data");
  return await res.json();
}

export async function fetchToday() {
  const res = await fetch (`${process.env.DEVELOPMENT_API_URL}/api/today`);
  if (!res.ok) throw new Error("Failed to fetch today data");
  return await res.json();
}
