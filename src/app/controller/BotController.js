const Bot = require('../services/Bot');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

module.exports = class BotController {
  static async job(req, res) {
    try {
      const { msg } = req.query;

      console.log('started');

      const token = process.env.TOKEN;
      const chaId = process.env.CHAT_ID;

      const bot = new Bot(token, chaId);

      const result = await (() => {
        if (msg) if (msg.length) return bot.sendMessage(msg);
      })();

      return res.status(200).send({
        error: false,
        sucess: true,
        messagem: msg,
        debug: result,
      });
    } catch (e) {
      res.status(500).send({
        error: true,
        sucess: false,
        messagem: e.message,
        debug: e.stack,
      });

      console.error(e);
    }
  }

  static async status(req, res) {
    return res.status(201).send({
      error: false,
      sucess: true,
      messagem: "I'm alive!",
      debug: '',
    });
  }
};
