# Tibia Discord Bot - Web Dashboard

## Overview

This is a comprehensive full-stack web application that provides a Discord bot for The Forgotten Souls guild with complete TibiaData API integration. The system includes a web dashboard for monitoring bot performance, viewing creature tracking data, and managing Discord bot operations with extensive slash command functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### July 18, 2025
- ✓ Fixed vite.config.ts compatibility issue with Railway deployment (import.meta.dirname → fileURLToPath)
- ✓ Converted from PostgreSQL database to in-memory storage system for Railway deployment simplicity
- ✓ Implemented demo mode for Discord bot when DISCORD_TOKEN is not provided
- ✓ Added comprehensive demo data: Dragon Lord (boosted creature), Ferumbras (boosted boss), 8 guild members
- ✓ Created detailed README.md with Railway deployment instructions and complete command documentation
- ✓ Added .env.example file for local development setup
- ✓ Implemented proper Discord channel posting logic for boosted creatures and bosses
- ✓ Changed environment variables to use BOOSTED_CREATURE_CHANNEL_ID and BOOSTED_BOSS_CHANNEL_ID
- ✓ Added smart change detection - only posts when creatures/bosses actually change
- ✓ Updated all documentation to reflect new channel-specific configuration

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with dark theme design optimized for gaming aesthetics
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: Custom query client with built-in error handling and retry logic

### Backend Architecture
- **Runtime**: Node.js with Express.js REST API
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless deployment)
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: Vite middleware integration for hot reloading in development

## Key Components

### Discord Bot Features
- **Automatic Updates**: Daily boosted creature and boss updates at 10:06 CEST with smart change detection
- **Comprehensive Slash Commands**: 11 commands with authentic TibiaData API v4 integration:
  - `/events` - Current and upcoming Tibia events
  - `/character <name>` - Detailed character information lookup
  - `/guild <name>` - Guild information and member status
  - `/worldinfo <world>` - World statistics and player counts
  - `/highscores <world> <category>` - Top 10 players by category
  - `/huntzones <level>` - Level-appropriate hunting suggestions
  - `/imbuements` - Complete imbuement reference guide
  - `/who` - Online guild members display
  - `/quote` - Random guild quotes system
  - `/trivia` - Tibia trivia with delayed answers
  - `/rules` - Guild rules display
- **Rich Discord Embeds**: Beautiful formatted messages with creature images and comprehensive data
- **Error Handling**: Multi-layer fallback mechanisms and graceful degradation
- **Analytics**: Command usage tracking and performance monitoring

### Web Dashboard Features
- **Real-time Monitoring**: Live bot status, uptime, and performance metrics
- **Creature Tracking**: Historical data and current boosted creature/boss information
- **Log Management**: Comprehensive logging system with filtering by level and command
- **API Testing**: Built-in tools for testing TibiaData API endpoints
- **Performance Metrics**: Response times, success rates, and memory usage tracking
- **Configuration Management**: Bot settings and channel configuration interface

### Database Schema
- **Bot Logs**: Structured logging with metadata, user tracking, and error details
- **Bot Status**: Real-time status tracking with performance metrics
- **Creatures**: Historical tracking of boosted creatures and bosses
- **API Tests**: Performance monitoring and response time tracking
- **Guild Members**: Member data caching and online status tracking

## Data Flow

1. **Discord Bot Operations**:
   - Bot connects to Discord API and registers slash commands
   - Scheduled cron jobs fetch TibiaData API for creature updates
   - Commands trigger API calls and database operations
   - Results are formatted into Discord embeds and sent to channels

2. **Web Dashboard**:
   - Frontend queries REST API endpoints for real-time data
   - React Query manages caching and automatic refetching
   - Dashboard displays live metrics, logs, and historical data
   - Manual triggers available for testing and management

3. **Database Operations**:
   - Drizzle ORM handles all database interactions with type safety
   - Automatic logging of bot activities and API responses
   - Historical data retention for analytics and debugging

## External Dependencies

### Core Services
- **Discord.js v14**: Latest Discord API integration with full TypeScript support
- **TibiaData API v4**: Official Tibia game data API for real-time information
- **Neon PostgreSQL**: Serverless database for production deployment

### UI Dependencies
- **Radix UI**: Comprehensive component primitives for accessibility
- **Tailwind CSS**: Utility-first styling with custom gaming theme
- **Lucide React**: Modern icon library for consistent UI elements

### Development Tools
- **Vite**: Fast development server with hot module replacement
- **TypeScript**: Full type safety across frontend and backend
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Production Environment
- **Backend**: Node.js application bundled with esbuild for optimal performance
- **Frontend**: Static assets built with Vite and served from dist/public
- **Database**: Neon PostgreSQL with connection pooling for scalability
- **Environment Variables**: Secure configuration for Discord tokens and database URLs

### Development Workflow
- **Hot Reloading**: Vite development server with express middleware integration
- **Type Checking**: Continuous TypeScript compilation with strict mode
- **Database Migrations**: Drizzle Kit for schema changes and updates
- **Error Monitoring**: Runtime error overlays and comprehensive logging

### Key Architecture Decisions

1. **Monorepo Structure**: Single repository with shared types and utilities between frontend/backend
2. **Type Safety**: End-to-end TypeScript with Drizzle ORM for database type safety
3. **Real-time Updates**: Polling-based approach for dashboard updates (can be extended to WebSockets)
4. **Error Resilience**: Multiple fallback mechanisms for API failures and graceful degradation
5. **Performance Optimization**: Query caching, bundle splitting, and efficient database queries
6. **Scalability**: Serverless-ready architecture with stateless design principles

The system is designed for reliability, maintainability, and extensibility, with a focus on providing a smooth user experience for both Discord bot interactions and web dashboard management.