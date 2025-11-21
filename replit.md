# All About Plumbing and Backflow - Replit Agent Guide

## Overview

This is a marketing website for "All About Plumbing and Backflow," a veteran-owned plumbing service business based in Pueblo, Colorado. The application is a single-page website designed to generate leads through contact form submissions, showcase services, and establish trust through professional presentation and veteran-owned branding.

**Primary Purpose:** Lead generation and brand establishment for a local plumbing service business

**Key Features:**
- Single-page marketing site with hero section, services showcase, and contact form
- Mobile-first responsive design with professional service business aesthetic
- Contact form submissions with validation
- Trust-building elements emphasizing veteran ownership and professional credentials

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool:**
- React 18+ with TypeScript
- Vite as the build tool and dev server
- Wouter for client-side routing (minimal routing - home page and 404)
- Single Page Application (SPA) architecture

**UI Component System:**
- Shadcn UI component library (New York variant)
- Radix UI primitives for accessible components
- Tailwind CSS for styling with custom design tokens
- Design system emphasizes trust, professionalism, and clean aesthetics
- Mobile-first responsive approach

**State Management:**
- React Query (TanStack Query) for server state
- Local component state using React hooks
- Form state managed through React Hook Form with Zod validation

**Design Principles:**
- Professional service business model (inspired by HomeAdvisor/Thumbtack)
- Veteran ownership as a trust indicator, not a gimmick
- Clear call-to-action visibility (phone number, contact form)
- Typography: Inter/Outfit font families for modern, clean look
- Consistent spacing using Tailwind's 4/6/8/12/16/20/24 scale

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server
- TypeScript for type safety
- Custom middleware for request logging and JSON parsing

**API Design:**
- RESTful API pattern
- Single endpoint: `POST /api/contact` for contact form submissions
- Zod schema validation for incoming data
- Structured error responses with user-friendly messages

**Data Storage Strategy:**
- Currently using in-memory storage (`MemStorage` class)
- Abstracted through `IStorage` interface for easy database integration
- Drizzle ORM configured for PostgreSQL (schema defined but not yet connected)
- Contact form submissions stored as structured objects

**Rationale:** The in-memory storage is a temporary solution allowing the application to function immediately. The architecture is designed to easily swap to PostgreSQL through the existing Drizzle configuration without changing business logic.

### Data Schema

**Contact Form Schema (Zod):**
```typescript
{
  name: string (required, min 1 char)
  phone: string (required, min 10 chars)
  email: string (required, valid email)
  serviceType: string (required, min 1 char)
  message: string (required, min 10 chars)
}
```

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Connection via `DATABASE_URL` environment variable
- Migration system in place (output to `./migrations`)
- Schema location: `./shared/schema.ts`

### Application Structure

**Monorepo Organization:**
- `client/` - React frontend application
  - `src/components/` - Reusable UI components
  - `src/pages/` - Page-level components
  - `src/lib/` - Utilities and query client
  - `src/hooks/` - Custom React hooks
- `server/` - Express backend
  - `index.ts` - Server entry point
  - `routes.ts` - API route definitions
  - `storage.ts` - Data persistence layer
  - `vite.ts` - Vite integration for development
- `shared/` - Code shared between client and server
  - `schema.ts` - Zod schemas for data validation

**Build & Deployment:**
- Development: Vite dev server proxied through Express
- Production: Vite builds static assets served by Express
- TypeScript compilation for server using esbuild
- All assets bundled into `dist/` directory

## External Dependencies

### Database
- **PostgreSQL** (via Neon Database serverless)
  - Not yet connected but fully configured
  - Drizzle ORM ready for integration
  - Requires `DATABASE_URL` environment variable

### UI Libraries
- **Shadcn UI** - Pre-built accessible component library
- **Radix UI** - Headless UI primitives (accordion, dialog, dropdown, etc.)
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Development Tools
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety across the stack
- **React Query** - Server state management
- **React Hook Form** - Form state management
- **Zod** - Runtime type validation

### Third-Party Services
- **Google Fonts** - Inter, DM Sans, Architects Daughter, Fira Code, Geist Mono fonts
- No analytics or tracking currently implemented
- No payment processing (lead generation only)
- No email service integration (submissions stored only)

### Asset Dependencies
- Background images referenced but stored locally
- Service van image: `/service-van.png`
- Owner portrait: `@assets/generated_images/Veteran_plumber_professional_portrait_7de81176.png`
- Favicon: `/favicon.png`

### Session Management
- `connect-pg-simple` for PostgreSQL session storage (configured but not active)
- `express-session` middleware configured
- Session storage awaits database connection

**Note:** The application is designed to work immediately with in-memory storage while maintaining the flexibility to add PostgreSQL persistence without architectural changes. The database integration requires only setting the `DATABASE_URL` environment variable and running migrations.