export default async function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "Missing number parameter" });
  }

  try {
    // Replace this with your actual API URL
    const apiUrl = https://number-info-anmol.vercel.app/?number=${number};

    const response = await fetch(apiUrl);
    const data = await response.text();

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data. Try again." });
  }
}
