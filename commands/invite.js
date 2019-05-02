module.exports = async ( client, message ) => {

	try {

		let embed = {};

		embed.title = "Invite "+client.user.username+" to your own server";
		embed.description {
			["Invite this bot to your server with this link"]("https://discordapp.com/oauth2/authorize?client_id=570972433998151701&scope=bot&permissions=515136")
		}
		//embed.description = '`------------------------------`\n';
		//embed.description += "https://discordapp.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=515136 \n";
		//embed.description += '`------------------------------`\n\n';

		embed.color = 0x2A6EBB;
		embed.timestamp = new Date();

		message.react('ℹ');
		message.channel.send({embed});

	} catch(e) {
		throw e;
	}

}
