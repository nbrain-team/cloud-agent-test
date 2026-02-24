const express = require("express");
const Anthropic = require("@anthropic-ai/sdk").default;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array is required" });
  }

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages,
    });

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("");

    res.json({ reply: text });
  } catch (err) {
    console.error("Anthropic API error:", err.message);
    res.status(502).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Chat server running at http://localhost:${PORT}`);
});
