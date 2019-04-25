module.exports = async ( client, message ) => {

	try {

		let embed = {};

		embed.title = client.user.username+" moxxi";

		embed.description = '`------------------------------`\n';
		embed.description += "This command is a WIP.\n";
		embed.description += 'Check out some of the other great options!  \n';

		embed.color = 0x2A6EBB;
		embed.timestamp = new Date();

		message.react('ℹ');
		message.channel.send({embed});

	} catch(e) {
		throw e;
	}

}
