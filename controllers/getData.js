const bot = require('../botSettings/settings')
const { validationResult } = require('express-validator')
const CHAT_ID = process.env.CHAT_ID

const getData = async (req, res) => {
  try {
    const { name, email, message } = req.body
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json(errors)
    }

    await bot.telegram.sendMessage(
      CHAT_ID,
      `You recieve a new Message!
      Name: ${name}. 
      E-mail: ${email}. 
      Message: ${message}.`
    )
    return res.status(200).json({
      message: `${name}, your message has been delivered successfully.`,
    })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' })
  }
}

module.exports = {
  getData,
}
