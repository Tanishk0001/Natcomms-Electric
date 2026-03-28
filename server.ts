import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// API Route for Contact Form
app.post("/api/contact", async (req, res) => {
  const { name, phone, service, message } = req.body;
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log(`New Inquiry Received for service@nationalelectro.com.au:`);
  console.log(`Name: ${name}`);
  console.log(`Phone: ${phone}`);
  console.log(`Service: ${service}`);
  console.log(`Message: ${message}`);

  res.status(200).json({ success: true, message: "Inquiry received successfully!" });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  startServer();
}

export default app;
