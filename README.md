Nexariq Agent
An AI-powered development platform with Claude API integration, built by AJ STUDIOZ.
Project Structure
nexariq-agent/
├── api/
│   └── chat.js           # Serverless function for Claude API
├── public/
│   ├── index.html        # Dashboard page
│   ├── agent.html        # Agent page with Claude integration
│   └── assets/
│       └── logo.png      # Nexariq logo
├── package.json          # Node.js dependencies and scripts
├── vercel.json           # Vercel configuration
└── README.md             # This file

Setup Instructions

Clone the Repository:
git clone <repository-url>
cd nexariq-agent


Install Dependencies:
npm install


Set Up Environment Variables:

Create a .env file in the root directory:CLAUDE_API_KEY=your_claude_api_key_here


Alternatively, set CLAUDE_API_KEY in the Vercel dashboard under project settings.


Download Logo:

Download the logo from https://z-cdn-media.chatglm.cn/files/8cbe835d-70fa-4b6b-a8a8-ba768119ee3b_circle_logo.png?... and save it as public/assets/logo.png.
Or update index.html and agent.html to keep the CDN URL.


Run Locally:
npm start


Open http://localhost:3000 to view the dashboard.
Navigate to http://localhost:3000/agent.html to test the agent.


Deploy to Vercel:
npm run deploy


Set CLAUDE_API_KEY in the Vercel dashboard.
Update the API URL in agent.html to your Vercel domain (e.g., https://your-vercel-app.vercel.app/api/chat).



Features

Dashboard: A sleek interface (index.html) with cards for the Nexariq Agent, Code Editor, Terminal, API Tester, and Analytics.
Nexariq Agent: Chat with Claude to generate, debug, and optimize code (agent.html).
Code Editor: Monaco Editor with live preview, file explorer, and terminal.
API Tester: Test cURL commands and API endpoints with a user-friendly interface.
Analytics: Placeholder for future analytics features.

Notes

The index.html uses Monaco Editor via CDN, so no additional dependencies are required.
The Claude API key must be kept secure and only stored in environment variables.
For production, host the logo locally in public/assets/ to avoid CDN dependency.

License
© 2025 Nexariq by AJ STUDIOZ. Licensed under MIT.
