// server.js
import express from "express";

const app = express();
app.use(express.json());

// GitHub webhook endpoint
app.post("/github-webhook/", (req, res) => {
  console.log("Webhook received:", req.body); // log payload
  res.status(200).send("OK"); // respond to GitHub
});

app.listen(3000, () => console.log("Server running on port 3000"));
