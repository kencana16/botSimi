const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '761541832:AAHqp-x2IwPWNgcY_AigW_fEujQd-nt_YDE';
const simsimiKey = 'c60c2eb4-f147-4ad0-b942-91c20add2c9d';
const url = `http://sandbox.api.simsimi.com/request.p?key=${simsimiKey}&lc=id&ft=1.0&text=`;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });
});