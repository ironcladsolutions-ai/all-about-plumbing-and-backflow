import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact form submission schema
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Please provide more details about your needs"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
