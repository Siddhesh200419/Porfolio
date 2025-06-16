import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { users, contactMessages, type User, type InsertUser, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { MongoClient, Db, Collection } from "mongodb";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentMessageId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentMessageId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

// ----------------- MONGODB IMPLEMENTATION -----------------
interface ContactMessageDoc extends Omit<ContactMessage, "id"> { _id?: any; }

class MongoStorage implements IStorage {
  private db: Db;
  private messages: Collection<ContactMessageDoc>;
  private usersCol: Collection<any>; // placeholder, not implemented

  private constructor(db: Db) {
    this.db = db;
    this.messages = db.collection<ContactMessageDoc>("contact_messages");
    this.usersCol = db.collection("users");
  }

  // Factory because constructors cannot be async
  static async create(uri: string, dbName = "portfolio"): Promise<MongoStorage> {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    return new MongoStorage(db);
  }

  // ----------------- Contact Message -----------------
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const doc: ContactMessageDoc = { ...insertMessage, createdAt: new Date() } as any;
    const result = await this.messages.insertOne(doc);
    return { id: result.insertedId.toString(), ...insertMessage, createdAt: doc.createdAt } as unknown as ContactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    const cursor = this.messages.find().sort({ createdAt: -1 });
    const docs = await cursor.toArray();
    return docs.map((d) => ({ id: d._id.toString(), ...d } as unknown as ContactMessage));
  }

  // ----------------- Users (not used yet) -----------------
  async getUser(id: number): Promise<User | undefined> {
    // Implement later if needed
    return undefined;
  }

  async getUserByUsername(_username: string): Promise<User | undefined> {
    return undefined;
  }

  async createUser(_user: InsertUser): Promise<User> {
    throw new Error("Not implemented");
  }
}

// ----------------- STORAGE EXPORT -----------------
let storage: IStorage;
if (process.env.MONGODB_URI) {
  storage = await MongoStorage.create(process.env.MONGODB_URI);
  console.log("Connected to MongoDB for storage");
} else {
  storage = new MemStorage();
  console.log("Using in-memory storage (MONGODB_URI not set)");
}

export { storage };
