const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use((ctx) => {
  ctx.telegram.sendMessage(
    ctx.from.id,
    `Bot is running now, your Telegram id: ${ctx.from.id}`
  )
})

module.exports = bot
