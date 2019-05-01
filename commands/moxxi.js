module.exports = async (client, message) => {
	function getRandomInt(max) {
		return Math.floor(Math.random()*Math.floor(max));
	};
	let embed = {};
	try {
		let data = require('./bl.json')
		let img = require('../img/moxxi.jpg')
		let attachment = new Discord.Attachment(img, 'moxxi.jpg');
		let char = data.characters.find(t => t.name === 'Moxxi')
		let quotes = char.data.quotes
		let number = getRandomInt(quotes.length) - 1
		let quote = quotes[Math.max(0, number)]
		embed.color = char.data.color
		embed.attachFile = (['../img/moxxi.jpg'])
		embed.thumbnail = {
				'url': 'attachment://moxxi.jpg',
				//'url': char.data.imageURL,
				'width': 256,
				'height': 256
			}
		embed.author = {
			'name': char.data.title,
			'url': data.website,
			'icon_url': data.iconURL
		}
		embed.description = quote
		embed.timestamp = new Date()
		return message.channel.send({
			embed,
			files: [{
    		attachment:'./img/moxxi.jpg',
    		name:'moxxi.jpg'
  }]
})
	} catch(e) {
	 	console.log(e.message);
	 	embed.color = 0x2ad68c;
	 	embed.title = 'Whoopsie!';
	 	embed.description = 'Something ... err ... went wrong. Git Gud Foolio!';
	 	embed.timestamp = new Date();
	 	return message.channel.send({embed});
	 }
};

/*
	const attachment = new Discord.Attachment('./img/moxxi.jpg', 'moxxi.jpg');
	const embed = new RichEmbed()
        .setTitle('Test out Moxxi')
				.setDescription('This is a test')
        .attachFile(attachment)
        .setThumbnail('attachment://moxxi.jpg')
				.height(256)
				.width(256);
				message.channel.send({embed}).catch(console.error)
*/

/*
 const { Client, RichEmbed } = require('discord.js');
 const attachment = new Discord.Attachment('./img/moxxi.jpg', 'moxxi.jpg');
 const embed = new RichEmbed()
		.setTitle('Test out Moxxi')
		.setDescription('This is a test')
		.attachFile(attachment)
		.setThumbnail('attachment://moxxi.jpg')
		.height(256)
		.width(256);
		message.channel.send({embed}).catch(console.error)
	};
*/
