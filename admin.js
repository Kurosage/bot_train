const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose')
const config = require('./config')
const helper = require('./helperadmin')
const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard')
helper.logStart()

mongoose.connect(config.DB_URL, {
	useMongoClient: true
}).then(() => console.log('MongoDB connected'))
  .catch(() => console.log('Error connect'))
const bot = new TelegramBot(config.TOKEN, {
	polling: true
});

bot.on('message',msg => {
	console.log('Working', msg.from.first_name)
	const chatId = helper.getChatId(msg)
	switch (msg.text){
		case kb.home.favourite:
			break
		case kb.home.films:
			bot.sendMessage(chatId, `Выберите жанр:`,{
				reply_markup: {keyboard:keyboard.films}
			})
			break
		case kb.home.cinemas:
			break
		case kb.back:
			bot.sendMessage(chatId, `Выберите необходимую кнопку на клавиатуре`,{
			reply_markup: {keyboard: keyboard.home}
			})
			break
	}
})



bot.onText(/\/start/, msg => {
	const text = `Здравствуйте,  ${msg.from.first_name}\nВыберите команду для начала работы`

	bot.sendMessage(helper.getChatId(msg), text, {
		reply_markup: {
			keyboard: keyboard.home 
		}
	})
})