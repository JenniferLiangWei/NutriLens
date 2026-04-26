export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, imageB64, imageMime } = req.body;

    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      return res.status(500).json({ error: 'API key not configured on server' });
    }
    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt' });
    }

    const parts = [];
    if (imageB64) {
      parts.push({ inlineData: { mimeType: imageMime || 'image/jpeg', data: imageB64 } });
    }
    parts.push({ text: prompt });

    const models = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-flash-latest'];
    let lastError = null;

    for (const model of models) {
      try {
        const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + key;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts }] })
        });

        const data = await response.json();

        if (!response.ok) {
          lastError = data?.error?.message || 'HTTP ' + response.status;
          continue;
        }

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (!text) {
          lastError = 'Empty response from model';
          continue;
        }

        return res.status(200).json({ text });
      } catch (e) {
        lastError = e.message;
      }
    }

    return res.status(500).json({ error: lastError || 'All models failed' });
  } catch (e) {
    return res.status(500).json({ error: 'Exception: ' + e.message });
  }
}
