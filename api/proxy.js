// proxy.js

import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/api", async (req, res) => {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "Number missing" });
  }

  try {
    const apiUrl = https://number-info-anmol.vercel.app/?number=${number};
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
