# Tibia Discord Bot - The Forgotten Souls Guild

A comprehensive Discord bot for Tibia players with integrated web dashboard, featuring 11 slash commands, automatic daily updates, and TibiaData API integration.

## 🚀 Features

### Discord Bot
- **11 Slash Commands** with authentic TibiaData API v4 integration
- **Automatic Daily Updates** for boosted creatures and bosses at 10:06 CEST
- **Rich Discord Embeds** with creature images and comprehensive data
- **Multi-layer Error Handling** with graceful degradation
- **Command Usage Analytics** and performance monitoring

### Web Dashboard
- **Real-time Bot Monitoring** - status, uptime, and performance metrics
- **Creature Tracking** - current boosted creature and boss information
- **Guild Member Display** - online status and character details
- **Command Logs** - comprehensive logging with filtering capabilities
- **API Testing Tools** - built-in TibiaData API endpoint testing
- **Dark Gaming Theme** - Discord-style interface optimized for gaming

## 🎮 Discord Commands

### Character & Guild Information
- `/character <name>` - Get detailed character information including level, vocation, world, and guild
- `/guild <name>` - Display guild information, member count, and founding details
- `/who` - Show online guild members with their current status

### World & Game Data
- `/worldinfo <world>` - World statistics, player counts, and server information
- `/highscores <world> <category>` - Top 10 players by category (level, magic, distance, etc.)
- `/events` - Current and upcoming Tibia events with descriptions and dates

### Hunting & Game Guides
- `/huntzones <level>` - Level-appropriate hunting zone suggestions with experience rates
- `/imbuements` - Complete imbuement reference guide with materials and costs

### Fun & Community
- `/quote` - Random guild quotes system for memorable moments
- `/trivia` - Tibia trivia questions with delayed answers for engagement
- `/rules` - Display guild rules and guidelines

## 🛠 Railway Deployment Setup

### Prerequisites
- Railway account ([railway.app](https://railway.app))
- Discord Developer Application
- Git repository

### Step 1: Create Discord Application
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and name it "Tibia Bot"
3. Go to "Bot" section and click "Add Bot"
4. Copy the Bot Token (keep this secure)
5. Under "Privileged Gateway Intents", enable:
   - Server Members Intent
   - Message Content Intent

### Step 2: Get Bot Invite Link
1. In Discord Developer Portal, go to "OAuth2" > "URL Generator"
2. Select scopes: `bot` and `applications.commands`
3. Select bot permissions:
   - Send Messages
   - Use Slash Commands
   - Embed Links
   - Read Message History
4. Copy the generated URL and invite the bot to your Discord server

### Step 3: Deploy to Railway

#### Option A: Deploy from GitHub
1. Fork this repository to your GitHub account
2. Go to [Railway Dashboard](https://railway.app/dashboard)
3. Click "New Project" > "Deploy from GitHub repo"
4. Select your forked repository
5. Railway will automatically detect the configuration

#### Option B: Deploy with Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Clone and navigate to project
git clone <your-repo-url>
cd tibia-discord-bot

# Initialize Railway project
railway init

# Deploy
railway up
```

### Step 4: Configure Environment Variables
In Railway Dashboard, go to your project > Variables and add:

```env
DISCORD_TOKEN=your_bot_token_here
DISCORD_GUILD_ID=your_guild_id_here
DISCORD_CHANNEL_ID=your_channel_id_here
```

**To get Guild and Channel IDs:**
1. Enable Developer Mode in Discord (User Settings > Advanced > Developer Mode)
2. Right-click your server → "Copy Server ID" (Guild ID)
3. Right-click your desired channel → "Copy Channel ID"

### Step 5: Custom Domain (Optional)
1. In Railway Dashboard, go to Settings > Domains
2. Add your custom domain or use the provided `.railway.app` URL
3. Configure your DNS settings as instructed

## 🔧 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd tibia-discord-bot

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Add your Discord bot token to .env
DISCORD_TOKEN=your_bot_token_here
DISCORD_GUILD_ID=your_guild_id_here
DISCORD_CHANNEL_ID=your_channel_id_here

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
tibia-discord-bot/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and config
├── server/                # Express backend
│   ├── services/          # Discord bot and API services
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage layer
├── shared/                # Shared types and schemas
└── railway.toml           # Railway deployment config
```

## 🎯 Bot Features in Detail

### Automatic Daily Updates
- **Schedule**: Every day at 10:06 CEST (after Tibia server save)
- **Content**: Boosted creature and boss information
- **Smart Detection**: Only posts when creatures actually change
- **Fallback System**: Multiple error handling layers for API failures

### TibiaData API Integration
- **Version**: TibiaData API v4 (official Tibia data source)
- **Endpoints**: Character, Guild, World, Highscores, Events
- **Rate Limiting**: Respects API limits with built-in delays
- **Error Handling**: Graceful degradation when API is unavailable

### Performance Monitoring
- **Response Times**: API call timing and optimization
- **Memory Usage**: Bot resource consumption tracking
- **Command Analytics**: Usage statistics and popular commands
- **Uptime Monitoring**: Bot availability and restart detection

## 🐛 Troubleshooting

### Common Issues

**Bot doesn't respond to commands:**
- Check bot permissions in Discord server
- Verify bot token is correct in environment variables
- Ensure bot has been invited with proper scopes

**Commands not showing up:**
- Bot needs `applications.commands` scope
- Commands register automatically on bot startup
- May take up to 1 hour for global commands to appear

**API errors:**
- TibiaData API has rate limits (be patient between commands)
- Some data may be temporarily unavailable during Tibia maintenance
- Bot includes fallback messages for API failures

**Railway deployment issues:**
- Check build logs in Railway dashboard
- Ensure all environment variables are set
- Verify `railway.toml` configuration

### Getting Help
- Check Railway logs for error details
- Review Discord bot permissions
- Verify TibiaData API status at [tibiadata.com](https://tibiadata.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **TibiaData API**: Official Tibia game data ([tibiadata.com](https://tibiadata.com))
- **Discord.js**: Discord API library
- **CipSoft GmbH**: Creators of Tibia MMORPG
- **The Forgotten Souls Guild**: Testing and feedback

---

**Note**: This bot is fan-made and not affiliated with CipSoft GmbH or Tibia. All Tibia-related trademarks belong to CipSoft GmbH.