export default async function handler(req, res) {
  // Log the request
  console.log('Request received:', req.method);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  
  // Check environment variable
  console.log('API Key available:', !!process.env.CLAUDE_API_KEY);
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Simple response for testing
    return res.status(200).json({ 
      response: `You said: "${message}". This is a test response.` 
    });
    
    // Uncomment the following once the basic endpoint works
    /*
    const Anthropic = require('@anthropic-ai/sdk');
    const anthropic = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY,
    });

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [{ role: 'user', content: message }],
    });

    return res.status(200).json({ response: response.content[0].text });
    */
    
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
}
