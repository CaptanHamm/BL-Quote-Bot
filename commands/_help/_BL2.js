module.exports = async (client, message) => {
	try {
		let msg = '**```md\n# This bot displays a random quote from several Characters from the Borderlands Universe.\n\n< See below for the characters that are available to use now! >\n```**';
		let hint = '*```md\n> Pssst, hey, hey you!\n> There is a hidden surprise for those that care to look for it.```*';
		let embed = {}
		embed.color = 15146284;
		embed.footer = {
      'text':'Created by: CaptainHammer & KaosZman'
    }
		embed.thumbnail = {
			'url': 'https://i.imgur.com/WbwKZGI.png'
		}
		embed.fields = [
				{
					'name': '__Invite__',
					'value': 'Invite this bot to your server with:  **['+client.settings.prefix+'invite](https://discordapp.com/oauth2/authorize?client_id='+client.id+'&scope=bot&permissions=515136)**',
					'inline': false
				},
				{
					'name': 'Axton',
					'value': ''+client.settings.prefix+'axton (WIP)',
					'inline': true
				},
				{
					'name': 'Gaige',
					'value': ''+client.settings.prefix+'gaige (WIP)',
					'inline': true
				},
				{
					'name': 'Krieg',
					'value': ''+client.settings.prefix+'krieg',
					'inline': true
				},
				{
					'name': 'Maya',
					'value': ''+client.settings.prefix+'maya (WIP)',
					'inline': true
				},
				{
					'name': 'Salvador',
					'value': ''+client.settings.prefix+'sal (WIP)',
					'inline': true
				},
				{
					'name': 'Zer0',
					'value': ''+client.settings.prefix+'zer0 (WIP)',
					'inline': true
				}
			],
		embed.timestamp = new Date();
		message.react('ℹ');
		message.channel.send(msg)
		message.channel.send({ embed })
		return message.channel.send(hint)
	}
	catch (e) {
		throw e;
	}
};
