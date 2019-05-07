module.exports = async ( client, message ) => {

	try {

		let embed = {};

		embed.title = "Invite "+client.user.username+" to your own server";
		embed.fields = [
				{
					'name': '__Invite__',
					'value': 'Invite this bot to your server with:  **[this invite link](https://discordapp.com/oauth2/authorize?client_id=570972433998151701&scope=bot&permissions=515136)**',
					'inline': false
				}
			]
		embed.color = 0x2A6EBB;
		embed.timestamp = new Date();

		message.react('ℹ');
		message.channel.send({embed});

	} catch(e) {
		throw e;
	}

}
