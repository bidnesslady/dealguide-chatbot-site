import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Create a new lead
  app.post("/api/leads", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const leadData = insertLeadSchema.parse(req.body);
      
      // Create lead in storage
      const lead = await storage.createLead(leadData);
      
      // Return success response
      res.status(201).json({
        message: "Lead created successfully",
        lead
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      }
      
      // Handle other errors
      console.error("Error creating lead:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all leads
  app.get("/api/leads", async (_req: Request, res: Response) => {
    try {
      const leads = await storage.getAllLeads();
      res.status(200).json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
