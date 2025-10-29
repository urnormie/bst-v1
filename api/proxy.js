export default async function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "Number required" });
  }

  try {
  
    const apiUrl = https://number-info-anmol.vercel.app/?number=${encodeURIComponent(number)};

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
