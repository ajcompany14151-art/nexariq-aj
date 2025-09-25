const Anthropic = require('@anthropic-ai/sdk');

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Check if API key is available
    if (!process.env.CLAUDE_API_KEY) {
      console.error('Claude API key is not configured');
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Initialize Anthropic client with the exact configuration from your curl
    const anthropic = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY,
      // Set the default headers to match your curl command
      defaultHeaders: {
        'anthropic-version': '2023-06-01'
      }
    });

    // Make the API call with the exact same parameters as your curl
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514', // Exact model from your curl
      max_tokens: 1024, // Same as your curl
      messages: [{ role: 'user', content: message }],
    });

    const responseText = response.content[0].text;
    res.status(200).json({ response: responseText });
  } catch (error) {
    console.error('Error calling Claude API:', error);
    res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
}
