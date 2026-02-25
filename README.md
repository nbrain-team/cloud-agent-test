# Claude Chat

A simple chat interface for talking to Anthropic Claude.

## Deploy to Vercel (recommended)

1. **Push this repo to GitHub** (already done).
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **"Add New Project"** → import this repository.
4. In **Environment Variables**, add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: *your Anthropic API key*
5. Click **Deploy**.

Your chat app will be live at `https://<your-project>.vercel.app` within a minute.

## Run locally

```bash
npm install
ANTHROPIC_API_KEY=sk-ant-... node server.js
```

Open [http://localhost:3000](http://localhost:3000).
