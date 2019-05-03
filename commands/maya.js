module.exports = async ( client, message ) => {
	try {
		let embed = {};
		embed.title = "Random Borderlands Quote";
		embed.description = '`------------------------------------`\n';
		embed.description += 'This command is under construction! \n';
		embed.description += '`------------------------------------`\n';
		embed.description += "Check back later and see if it works! \n";
		embed.description += '`------------------------------------`\n\n';
		embed.color = 0x2A6EBB;
		embed.timestamp = new Date();
		message.react('ℹ');
		message.channel.send({embed});
	} catch(e) {
		throw e;
	}
}
