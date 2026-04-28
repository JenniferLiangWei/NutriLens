exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {statusCode:200,headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type','Access-Control-Allow-Methods':'POST, OPTIONS'},body:''};
  }
  if (event.httpMethod !== 'POST') return {statusCode:405,body:'Method not allowed'};
  try {
    const {prompt,imageB64,imageMime} = JSON.parse(event.body);
    const key = process.env.GEMINI_API_KEY;
    if (!key) return {statusCode:500,headers:{'Access-Control-Allow-Origin':'*'},body:JSON.stringify({error:'API key not configured'})};
    if (!prompt) return {statusCode:400,headers:{'Access-Control-Allow-Origin':'*'},body:JSON.stringify({error:'Missing prompt'})};

    const parts = [];
    if (imageB64) parts.push({inlineData:{mimeType:imageMime||'image/jpeg',data:imageB64}});
    parts.push({text:prompt});

    const models = ['gemini-1.5-flash','gemini-1.5-flash-latest','gemini-2.0-flash'];
    let lastError = null;

    for (const model of models) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
          {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts}]})}
        );
        const data = await response.json();
        if (!response.ok) {
          const msg = data?.error?.message || 'HTTP '+response.status;
          lastError = msg;
          continue;
        }
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (!text) {lastError='Empty response';continue;}
        return {statusCode:200,headers:{'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},body:JSON.stringify({text})};
      } catch(e) {lastError=e.message;}
    }
    return {statusCode:500,headers:{'Access-Control-Allow-Origin':'*'},body:JSON.stringify({error:lastError||'All models failed'})};
  } catch(e) {
    return {statusCode:500,headers:{'Access-Control-Allow-Origin':'*'},body:JSON.stringify({error:'EXCEPTION: '+e.message})};
  }
};
