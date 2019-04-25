module.exports = async ( client, message ) => {

function getRandomInt(max)
{
	return Math.floor(Math.random()*Math.floor(max));
};

try {
		//creates variables and variable array for use later on with individual sub commands.
		const authorImage = 'http://static.tumblr.com/a295b37dd192646fa1fd7fb66092af0f/djayg0e/04Ensfpqb/tumblr_static_6rqhssg0lxk4kwoko40cs8ws8.png';
		const imageJack = ['Handsome Jack', 'https://pm1.narvii.com/5901/da5b655b2303fa7dc7e81fd9deee5fa3cf735fc3_hq.jpg'];
		//Args passed to command
		let { text } = obj.command.args;
		//calls the Quotes.json file and uses the array "Jack"
		let quotes = require("./Quotes.json")["Jack"];
		//gets a random quote from the array
		let quoteItem = quotes[getRandomInt(quotes.length)-1];
		//creates a rich embed for displaying quote
		const Discord = require('discord.js');
		let replyJack = new Discord.RichEmbed();
		replyJack.setColor(0xf0ff00);
		replyJack.setAuthor(imageJack[0], authorImage);
		replyJack.setThumbnail(imageJack[1]);
		replyJack.setDescription(quoteItem);
		obj.message.channel.send(replyJack);
		//console.log(doQJack)
	}
	//if the above fails...
	catch(e) {
		console.log("YOU DUN FUCKED UP")
		//message.error('quote.doQJack',e);
		//message.fail(e.message);
	}
};
