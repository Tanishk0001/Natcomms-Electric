import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
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

    // In a real production environment, you would use a service like Nodemailer, SendGrid, or AWS SES here.
    // Example:
    // await sendEmail({
    //   to: 'service@nationalelectro.com.au',
    //   subject: `New Inquiry from ${name}`,
    //   text: `Name: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
    // });

    res.status(200).json({ success: true, message: "Inquiry received successfully!" });
  });

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

startServer();
