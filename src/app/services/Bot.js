const TG = require('telegram-bot-api');

module.exports = class Bot {
  constructor(token, chatId) {
    this.token = token;
    // Define your API object
    this.api = new TG({
      token: this.token,
    });
    // Define your message provider
    this.mp = new TG.GetUpdateMessageProvider();
    this.api.setMessageProvider(this.mp);
    this.api
      .start()
      .then(() => {
        console.log('API is started');
      })
      .catch((err) => {
        console.log('Bot Starting... ', err);
      });

    this.chatId = chatId;
  }

  async sendMessage(message) {
    try {
      return this.api
        .sendMessage({
          chat_id: this.chatId,
          text: message,
          parse_mode: 'Markdown',
        })
        .then((sucess) => {});
    } catch (error) {
      console.log('Bot Send Msg... ', error);
      console.log('Trying again at: ' + new Date(), error);
      this.sendMessage(message);
    }
  }

  async sendPhoto(message, pathBuffer) {
    return this.api.sendPhoto({
      chat_id: this.chatId,
      caption: message,
      path: pathBuffer,
    });
  }
};
