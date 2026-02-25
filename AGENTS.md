# AGENTS.md

## Cursor Cloud specific instructions

This is a simple Node.js chat application that proxies messages to the Anthropic Claude API.

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Chat server | `ANTHROPIC_API_KEY=<key> node server.js` | 3000 | Serves both the API and static frontend |

### Running

The `ANTHROPIC_API_KEY` environment variable is injected via Cursor Secrets. The server runs on port 3000 (configurable via `PORT` env var). There is no separate build step — the frontend is plain HTML/CSS/JS served statically. Start with `node server.js`.

### Project structure

- `server.js` — Express server with `/api/chat` endpoint
- `public/index.html` — Chat UI (single-page, no build step)
- `package.json` — Dependencies: `express`, `@anthropic-ai/sdk`

### Notes

- No linter or test framework is configured.
- The server must be killed by PID (not by name) if you need to restart it.
