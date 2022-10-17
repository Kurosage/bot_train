const TelegramBot = require('node-telegram-bot-api');
const TOKEN = 'Ваш токен бота';
const debug = require('./helpers')
console.log('Bot started');
const fs = require('fs')
const bot = new TelegramBot(TOKEN, {polling: {
	interval: 300,
	autoStart: true,
	params:{timeout: 10}
}
});


// bot.on('message', (msg) => {
// 	const {id}= msg.chat
// 	// if (msg.text.toLowerCase () === 'hello'){
// 	// 	bot.sendMessage(id, 'Hello,' + msg.from.first_name)
// 	// }
// 	// else{
// 	// bot.sendMessage(id, debug(msg))
// 	// }
// 	bot.sendMessage(id, debug(msg))
// 	.then( () => {
// 		console.log('Message has been send')
// 	})
// 	.catch( (error) =>{
// 		console.error(error)
// 	})
// });
// /help
// bot.onText(/\/start/,msg => {
// 	const {id} = msg.chat
// 	const html =`<strong>Hello,  ${msg.from.first_name}</strong>
// 	 <pre>${debug(msg)}
// 	</pre>`

// 	bot.sendMessage(id, html, {
// 		parse_mode: 'HTML'
// 	})
// })
// bot.onText(/\/start/,msg => {
// 	const {id} = msg.chat
// 	bot.sendMessage(id, `https://doramalive.ru/dorama/svet_luny_ocherchennyy_oblakom/series4/`,{
// 		disable_web_page_preview: false
// 	})
// })

//13lesson
// bot.onText(/\/help/,msg => {
// 	const idchat = msg.chat.id
// 	bot.sendMessage(idchat,'Клавиатура',{
// 		reply_markup:{
// 			keyboard: [
// 				['Ответить',{text:'Отправить местоположение', 
// 				request_location: true}],//запрос местоположения
// 				['Закрыть'],
// 				[{text:'Отправить контакт',request_contact:true}]
// 			],//one_time_keyboard:true -клавиатуру видно только один раз
// 		}
// 	})
// })
// bot.on('message',msg=>{
// 	const idch = msg.chat.id
// 	if (msg.text === 'Закрыть')
// 	{
// 		bot.sendMessage(idch,'Клавиатура закрыта',{
// 			reply_markup:{
// 				remove_keyboard: true //прятать клавиатуру
// 			}
// 		})
// 	}
// 	else if (msg.text === 'Ответить')
// 	{
// 		bot.sendMessage(idch,'Ответ',{
// 			reply_markup:{
// 				force_reply: true// пересылает сообщение
// 			}
// 		})
// 	}
// 	else{}
// })

//14lesson keyboard
// bot.on('message',msg=>{
// 	const idch = msg.chat.id
// 	bot.sendMessage(idch,'Inline keyboard',{
// 		reply_markup:{
// 			inline_keyboard:[
// 				[{text:'Google',url:'https://google.com'}],
// 				[{text:'Reply',callback_data:'reply'},
// 				{text:'Forward',callback_data:'forward'}]
// 			]
// 		}
// 	})
// })
// bot.on('callback_query',query =>{
// 	//bot.sendMessage(query.message.chat.id,debug(query))
// 	bot.answerCallbackQuery(query.id,`Obrabotano`)// всплывающая надпись 
// })


//15lesson inline zapros (запрос в любом другом чате с передачей инфы)
// bot.on('inline_query',query =>{
// 	const results = []
// 	for (let i = 0;i < 5; i++){
// 		results.push({
// 			type:'article',
// 			id: i.toString(),
// 			title: 'Title ' + i,
// 			input_message_content: {
// 				message_text: `Article #${i+1}`
// 			}

// 		})
// 	}
// 	bot.answerInlineQuery(query.id, results,{
// 		cache_time: 0
// 	})
// })

//16lesson перенаправление сообщений| ответ на сообщение
// const inline_keyboard = [
// [
// {
// 	text: 'Forward',
// 	callback_data: 'forward'
// },
// {
// 	text: 'Reply',
// 	callback_data: 'reply'
// }
// ],
// [
// {
// 	text: 'Edit',
// 	callback_data: 'edit'
// },
// {
// 		text: 'Delete',
// 		callback_data: 'delete'
// }
// ]
// ]
// bot.on('callback_query',query =>{
// 	const {chat, message_id,text} = query.message

// 	switch (query.data){
// 		case 'forward'://перенаправление сообщений
// 		// куда, откуда, что
// 		bot.forwardMessage(chat.id,chat.id,message_id)
// 			break
// 		case 'reply'://ответ на сообщение
// 		bot.sendMessage(chat.id,`Отвечаем на сообщение`,{
// 			reply_to_message_id: message_id
// 		})
// 		break
// 		case 'edit':// редактирование сообщений
// 		bot.editMessageText(`${text} (edited)`,{
// 			chat_id:chat.id,
// 			message_id: message_id,
// 			reply_markup:{inline_keyboard}
// 		})
// 		break
// 		case 'delete':
// 		bot.deleteMessage(chat.id,message_id)
// 		break
// 	}

// 	bot.answerCallbackQuery({
// 		callback_query_id: query.id
// 	})
// })
// bot.onText(/\/start/,(msg,[source,match])=>{
// 	const chatId = msg.chat.id
// 	bot.sendMessage(chatId,'Keyboard',{
// 		reply_markup:{
// 			inline_keyboard
// 		}
// 	})
// })



// //20 Отправка картинок| аудио | файлов
// bot.onText(/\/start/,msg =>{
// 	bot.sendPhoto(msg.chat.id,fs.readFileSync(__dirname + '/cat.jpg'))
// })

// bot.onText(/\/pic/,msg =>{
// 	bot.sendPhoto(msg.chat.id,'./cat.jpg',{
// 		caption: 'This is nature'// описание картинки
// 	})
// })

// //аудио
// bot.onText(/\/1audio/,msg =>{
// 	bot.sendAudio(msg.chat.id,'./bts.mp3')
// })
// bot.onText(/\/audio2/,msg =>{
// 	bot.sendMessage(msg.chat.id, 'Start audio uploading...')

// 	fs.readFile(__dirname + '/bts.mp3',(err,data) =>{
// 		bot.sendAudio(msg.chat.id, data).then(()=>{
// 			bot.sendMessage(msg.chat.id, 'Uploading finished')	
// 		})
// 	})
// })
// //файлы
// bot.onText(/\/doc1/,msg =>{
// 	bot.sendDocument(msg.chat.id, './wfm.xlsx')
// })

// bot.onText(/\/doc2/,msg =>{
// 	bot.sendMessage(msg.chat.id, 'Start file uploading...')
// 	fs.readFile(__dirname + '/wfm.zip', (err,file) =>{
// 		bot.sendDocument(msg.chat.id, file,{
// 			caption: 'Arhiv'
// 		}).then( () =>{
// 			bot.sendMessage(msg.chat.id, 'Up finished')
// 		})
// 	})
// })

// // стикеры

// bot.onText(/\/stik1/,msg => {
// 	bot.sendSticker(msg.chat.id, '.sticker.webp')
// })
// bot.onText(/\/stik2/,msg => {
// 	fs.readFile(__dirname + '/sticker.webp', (err,file) =>{
// 		bot.sendSticker(msg.chat.id, file)
// 	})
// })


// //видео

// bot.onText(/\/v1/,msg =>{
// 	bot.sendVideo(msg.chat.id, 'ссылка на видео/путь к видео')
// })

// bot.onText(/\/v3/,msg =>{
// 	bot.sendMessage(msg.chat.id, 'Start file uploading...')
// 	fs.readFile(__dirname + '/wfm.mp4', (err,video) =>{
// 		bot.sendDocument(msg.chat.id, video)
// 	})
// })

// //геолокация

// bot.onText(/\/loc1/,msg =>{
// 	bot.sendLocation(msg.chat.id, 59.92831,30.360586)
// })

// //контакт

// bot.onText(/\/cont/,msg =>{
// 	bot.sendContact(msg.chat.id, '89872113756','Kamila')
// })


//lesson 27 создание и оплата товара
// bot.onText(/\/help (.+)/,(msg,[source, match]) =>{
// 	const {id} = msg.chat
// 	bot.sendMessage(id, debug(match))
// })

