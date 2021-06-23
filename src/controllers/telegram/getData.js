const { Telegraf } = require('telegraf')

const bot = require('../../botSettings/settings')
const CHAT_ID = process.env.CHAT_ID

const getData = async (req, res) => {
  try {
    await bot.telegram.sendMessage(CHAT_ID, `This is test message!`)
    res.json('This is test message from bot NEW')
  } catch (error) {}
}

module.exports = {
  getData,
}
