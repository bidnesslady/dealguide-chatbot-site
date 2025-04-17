import { users, type User, type InsertUser, leads, type Lead, type InsertLead } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Lead management methods
  createLead(lead: InsertLead): Promise<Lead>;
  getAllLeads(): Promise<Lead[]>;
}

// DatabaseStorage implementation that uses the database
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const createdAt = new Date().toISOString();
    const [lead] = await db
      .insert(leads)
      .values({ ...insertLead, createdAt })
      .returning();
    return lead;
  }
  
  async getAllLeads(): Promise<Lead[]> {
    return await db.select().from(leads);
  }
}

export const storage = new DatabaseStorage();
