// api/proxy.js
export default async function handler(req, res) {
  const number = req.query.number || '';
  if (!number) {
    return res.status(400).json({ error: 'Missing number query param. Use ?number=...' });
  }

  const target = https://number-info-anmol.vercel.app/?number=${encodeURIComponent(number)};

  try {
    const r = await fetch(target);
    if (!r.ok) {
      const txt = await r.text();
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(502).json({ error: 'Upstream error', status: r.status, body: txt.slice(0, 1000) });
    }
    const data = await r.json();

    // Return with CORS header so browser can read it
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    return res.status(200).json(data);
  } catch (err) {
    console.error('proxy error', err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ error: 'Proxy fetch failed', details: String(err) });
  }
}
