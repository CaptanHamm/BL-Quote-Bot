module.exports = async ( client, message, doQuote, doQTorgue ) => {

function getRandomInt(max)
{
	return Math.floor(Math.random()*Math.floor(max));
};
//creates variables and variable array for use later on with individual sub commands.
const authorImage = 'http://static.tumblr.com/a295b37dd192646fa1fd7fb66092af0f/djayg0e/04Ensfpqb/tumblr_static_6rqhssg0lxk4kwoko40cs8ws8.png';
const imageTorgue = ['Mr. Torgue', 'http://img3.wikia.nocookie.net/__cb20140124073840/fallout/images/7/79/TOCI_Mr_Torgue.jpg'];
const imagePsycho = ['Ramblings from a Psycho', 'https://orig00.deviantart.net/0e03/f/2012/228/6/c/borderlands_2____cover_bandit_render_by_pascuarts-d5bbx0i.png'];
const imageJack = ['Handsome Jack', 'https://pm1.narvii.com/5901/da5b655b2303fa7dc7e81fd9deee5fa3cf735fc3_hq.jpg'];

async function doQuote( obj ) {
	try {
		//Args passed to command
		let { text } = obj.command.args;
		//Do stuff here for doQuote
		obj.success("This command requires a sub command to run.  Check out " +obj.instance.settings.prefix + obj.command.cmd + " help to see more.");
		}
	//if all else fails...
	catch(e) {
		obj.error('quote.doQuote',e);
	}
};
async function doQTorgue( obj ) {
	try {
		//Args passed to command
		let { text } = obj.command.args;
		//calls the Quotes.json file and tells it to look at "Torgue"
		let quotes = require("./Quotes.json")["Torgue"];
		//gets a random quote from the array
		let quoteItem = quotes[getRandomInt(quotes.length)-1];
		//creates a rich embed for displaying quote
		const Discord = require('discord.js');
		let replyTorgue = new Discord.RichEmbed();
		replyTorgue.setColor(0x007CB6);
		replyTorgue.setAuthor(imageTorgue[0], authorImage);
        replyTorgue.setThumbnail(imageTorgue[1]);
		replyTorgue.setDescription(quoteItem);
		obj.message.channel.send(replyTorgue);
	}

	//if all else fails....
	catch(e) {
		obj.error('quote.doQTorgue',e);
		obj.fail(e.message);
	}
};



/**
{
		doQuote: async ( obj ) => {
			return await doQuote( obj );
		},
		doQTorgue: async ( obj ) => {
			return await doQTorgue( obj );
		},
		doQPsycho: async ( obj ) => {
			return await doQPsycho( obj );
		},
		doQJack: async ( obj ) => {
			return await doQJack( obj );
		},
		doQLotto: async ( obj ) => {
			return await doQLotto( obj );
		}
}
**/
};
