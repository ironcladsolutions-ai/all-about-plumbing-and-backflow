import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      await storage.saveContactFormSubmission(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for contacting us! We'll get back to you within 24 hours." 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form and fill in all required fields.",
          errors: error.errors 
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "Sorry, something went wrong. Please try calling us directly at (719) 406-7517." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
