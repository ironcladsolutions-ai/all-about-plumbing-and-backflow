import { type ContactFormData } from "@shared/schema";

export interface IStorage {
  saveContactFormSubmission(data: ContactFormData): Promise<void>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: ContactFormData[];

  constructor() {
    this.contactSubmissions = [];
  }

  async saveContactFormSubmission(data: ContactFormData): Promise<void> {
    this.contactSubmissions.push({
      ...data,
    });
    console.log("Contact form submission received:", data);
    console.log(`Total submissions: ${this.contactSubmissions.length}`);
  }
}

export const storage = new MemStorage();
