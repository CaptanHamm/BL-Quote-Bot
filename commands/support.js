module.exports = async ( client, message ) => {

	try {

		let embed = {};

		embed.title = "TITLE GOES HERE";

		embed.description = '`------------------------------`\n';
		embed.description += 'ENTER TEXT YOU WANT TO DISPLAY HERE \n';
		embed.description += '`------------------------------`\n';
		embed.description += "MORE TEXT HERE IF YOU WANT TO \n";
		embed.description += '`------------------------------`\n\n';

		embed.color = 0x2A6EBB;
		embed.timestamp = new Date();

		message.react('ℹ');
		message.channel.send({embed});

	} catch(e) {
		throw e;
	}

}
