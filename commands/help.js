module.exports = async (client, message) => {
	try {
		let msg = '**```md\n# This bot displays a random quote from several Characters from the Borderlands Universe.\n\n< See below for the characters that are available to use now! >\n```**';
		let embed = {}
		//embed.title = 'HELP!'
		embed.color = 15146284;
		embed.footer = {
      'text':'Created by: CaptainHammer & KaosZman'
    }
		embed.thumbnail = {
			'url': 'https://i.imgur.com/WbwKZGI.png'
		}
		embed.fields = [{
					'name': 'Brick',
					'value': '-brick',
					'inline': true
				},
				{
					'name': 'Claptrap',
					'value': '-clap',
					'inline': true
				},
				{
					'name': 'Handsome Jack',
					'value': '-jack',
					'inline': true
				},
				{
					'name': 'Krieg',
					'value': '-krieg',
					'inline': true
				},
				{
					'name': 'Mad Moxxi',
					'value': '-moxxi',
					'inline': true
				},
				{
					'name': 'Random',
					'value': '-random (WIP)',
					'inline': true
				},
				{
					'name': 'Tiny Tina',
					'value': '-tina',
					'inline': true
				},
				{
					'name': 'Mr. Torgue Flexington',
					'value': '-torgue',
					'inline': true
				},
				{
					'name': '`:___________________________________________________:`',
					'value': '\u200B'
				},
				{
					'name': '__Hidden Surprise!!!__',
					'value': '*There is a hidden surprise for those that care to look for it.*',
					'inline': false
				},
				{
					'name': '__Invite__',
					'value': 'Invite this bot to your server with:  **[-invite](https://discordapp.com/oauth2/authorize?client_id=570972433998151701&scope=bot&permissions=515136)**',
					'inline': false
				},
        {
					'name': '`:___________________________________________________:`',
					'value': '\u200B'
				}
			],
			embed.timestamp = new Date();
		message.react('ℹ');
		message.channel.send(msg)
		return message.channel.send({ embed })
	}
	catch (e) {
		throw e;
	}
};
