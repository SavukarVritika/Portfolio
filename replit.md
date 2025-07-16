# Vritika Savukar Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Vritika Savukar, a Computer Science student specializing in AI/ML. The application showcases her projects, skills, and achievements with a sleek dark theme and interactive animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Development**: tsx for TypeScript execution
- **Build System**: Vite for frontend bundling, esbuild for backend compilation

### Data Storage Solutions
- **Database**: PostgreSQL (configured for use with Drizzle ORM)
- **ORM**: Drizzle ORM with type-safe database operations
- **Connection**: Neon Database serverless connection
- **Session Storage**: PostgreSQL with connect-pg-simple middleware
- **Fallback**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **Hero Section**: Animated introduction with gradient text effects
- **Project Showcase**: Interactive project cards with hover effects
- **Skills Display**: Technology stack presentation
- **Contact Section**: Social media links and contact information
- **Navigation**: Responsive mobile-friendly navigation

### Backend Components
- **Express Server**: RESTful API setup with middleware
- **Storage Interface**: Abstracted storage layer with CRUD operations
- **Route Handler**: Centralized route registration system
- **Development Tools**: Vite integration for hot module replacement

### UI/UX Features
- **Dark Theme**: Custom color scheme with purple accent colors
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Staggered animations for project cards and sections
- **Interactive Elements**: Hover effects and smooth transitions

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express handles requests through registered routes
3. **Data Operations**: Storage interface abstracts database operations
4. **Response Handling**: JSON responses with error handling middleware
5. **State Updates**: React Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI components, shadcn/ui, Tailwind CSS
- **Animation**: Framer Motion for interactive animations
- **Database**: Drizzle ORM, Neon Database, PostgreSQL
- **Development**: Vite, TypeScript, ESBuild

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development
- **Build Tools**: PostCSS, Autoprefixer for CSS processing

## Deployment Strategy

### Development Environment
- **Local Development**: tsx for TypeScript execution with hot reload
- **Frontend**: Vite dev server with HMR
- **Backend**: Express server with development middleware
- **Database**: Environment-based DATABASE_URL configuration

### Production Build
- **Frontend**: Vite build process outputting to `dist/public`
- **Backend**: esbuild compilation to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory
- **Assets**: Static file serving from built frontend

### Configuration
- **Environment Variables**: DATABASE_URL for database connection
- **Build Scripts**: Separate dev, build, and production start commands
- **Database Management**: Drizzle kit for schema management and migrations

### Key Features
- **SEO Optimization**: Meta tags, structured data, and semantic HTML
- **Performance**: Code splitting, lazy loading, and optimized assets
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Mobile Responsive**: Touch-friendly interface with mobile breakpoints