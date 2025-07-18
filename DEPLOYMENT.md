# Railway Deployment Checklist

## Pre-Deployment Setup

### 1. Discord Bot Configuration
- [ ] Create Discord Application at [Discord Developer Portal](https://discord.com/developers/applications)
- [ ] Generate Bot Token and save securely
- [ ] Enable required bot permissions:
  - [ ] Send Messages
  - [ ] Use Slash Commands  
  - [ ] Embed Links
  - [ ] Read Message History
- [ ] Invite bot to Discord server with proper scopes (`bot` + `applications.commands`)

### 2. Get Channel IDs
- [ ] Enable Developer Mode in Discord (User Settings > Advanced > Developer Mode)
- [ ] Get Creature Channel ID: Right-click your boosted creature channel → "Copy Channel ID"
- [ ] Get Boss Channel ID: Right-click your boosted boss channel → "Copy Channel ID"

### 3. Railway Project Setup
- [ ] Fork repository to your GitHub account
- [ ] Create new Railway project
- [ ] Connect GitHub repository to Railway

## Railway Configuration

### Environment Variables
Set these in Railway Dashboard > Variables:

```env
DISCORD_TOKEN=your_bot_token_here
BOOSTED_CREATURE_CHANNEL_ID=your_creature_channel_id_here
BOOSTED_BOSS_CHANNEL_ID=your_boss_channel_id_here
```

### Deployment Files
- [ ] `railway.toml` - Railway configuration ✅
- [ ] `package.json` - Build and start scripts ✅
- [ ] `vite.config.ts` - Production build config ✅

## Post-Deployment Verification

### 1. Bot Status
- [ ] Check Railway logs for successful startup
- [ ] Verify bot appears online in Discord
- [ ] Test slash commands are registered (may take up to 1 hour)

### 2. Web Dashboard
- [ ] Access Railway-provided URL
- [ ] Verify dashboard loads correctly
- [ ] Check bot status shows "online"
- [ ] Confirm demo data appears (creatures, guild members, logs)

### 3. Discord Commands Testing
Test each command once deployed:
- [ ] `/events` - Tibia events
- [ ] `/character <name>` - Character lookup
- [ ] `/guild <name>` - Guild information
- [ ] `/worldinfo <world>` - World stats
- [ ] `/highscores <world> <category>` - Player rankings
- [ ] `/huntzones <level>` - Hunting suggestions
- [ ] `/imbuements` - Imbuement guide
- [ ] `/who` - Online guild members
- [ ] `/quote` - Random guild quote
- [ ] `/trivia` - Tibia trivia
- [ ] `/rules` - Guild rules

## Production Features

### Automatic Daily Updates
- [ ] Scheduled creature updates at 10:06 CEST
- [ ] Smart change detection (only posts when creatures change)
- [ ] Error handling and retry logic

### Monitoring & Analytics
- [ ] Command usage tracking
- [ ] API response time monitoring
- [ ] Bot uptime statistics
- [ ] Error logging and alerts

## Troubleshooting

### Common Deployment Issues

**Build Failures:**
- Check Node.js version compatibility (18+)
- Verify all dependencies are in package.json
- Review Railway build logs
- If you see "Could not resolve entry module" errors, the app is configured to run in development mode which bypasses build issues

**Bot Not Starting:**
- Verify DISCORD_TOKEN is set correctly
- Check bot permissions in Discord server
- Review Railway application logs

**Commands Not Working:**
- Ensure bot has `applications.commands` scope
- Wait up to 1 hour for global command registration
- Test in server where bot was invited

**Dashboard Issues:**
- Check if Railway app is sleeping (upgrade plan if needed)
- Verify environment variables are set
- Test API endpoints individually

### Error Recovery
- Railway automatically restarts on crashes
- In-memory data resets on restart (expected behavior)
- Check logs for specific error details

## Performance Optimization

### Railway Deployment Notes

**Build Process**: Railway uses a custom build script (`scripts/build.sh`) that bypasses vite configuration compatibility issues. This ensures reliable deployment while maintaining all Discord bot functionality.

**Web Interface**: Railway deployments include a simplified web interface for bot status monitoring. The full React dashboard is available when running locally with `npm run dev`.

**Plan Recommendations**:
- **Hobby Plan**: Suitable for small guilds (<50 members)
- **Pro Plan**: Recommended for active communities  
- **Team Plan**: For multiple bots or high usage

### Monitoring
- Set up Railway monitoring alerts
- Monitor memory usage patterns
- Track API response times

## Security Best Practices

- [ ] Never commit Discord tokens to Git
- [ ] Use Railway environment variables for secrets
- [ ] Regularly rotate bot tokens
- [ ] Monitor bot activity through dashboard
- [ ] Restrict bot permissions to minimum required

## Backup & Recovery

### Data Persistence
- In-memory storage resets on restart (by design)
- Historical logs preserved in application logs
- Export guild data before major updates

### Rollback Plan
- Keep previous working deployment
- Use Railway rollback feature if needed
- Test changes in development first

---

**Note**: This bot uses in-memory storage for simplicity and fast Railway deployment. Data resets on restart, which is expected behavior for demo and development purposes.