module.exports = async (client, message) => {
	try {
		let msg = '**```md\n# This bot displays a random quote from several Characters from the Borderlands Universe.\n\n< See below for the characters that are available to use now! >\n```**';
		let hint = '*```md\n> Pssst, hey, hey you!\n> There is a hidden surprise for those that care to look for it.```*';
		let embed = {}
		//embed.title = 'HELP!'
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
					'value': 'Invite this bot to your server with:  **[-invite](https://discordapp.com/oauth2/authorize?client_id=570972433998151701&scope=bot&permissions=515136)**',
					'inline': false
				},
				{
					'name': 'Axton',
					'value': '-axton (WIP)',
					'inline': true
				},
				{
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
					'name': 'Gaige',
					'value': '-gaige (WIP)',
					'inline': true
				},
				{
					'name': 'Sir Hammerlock',
					'value': '-hammerlock',
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
					'name': 'Lilith',
					'value': '-lilith (WIP)',
					'inline': true
				},
				{
					'name': 'Marcus',
					'value': '-marcus',
					'inline': true
				},
				{
					'name': 'Maya',
					'value': '-maya (WIP)',
					'inline': true
				},
				{
					'name': 'Mordecai',
					'value': '-mordy (WIP)',
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
					'name': 'Roland',
					'value': '-roland (WIP)',
					'inline': true
				},
				{
					'name': 'Salvador',
					'value': '-sal (WIP)',
					'inline': true
				},
				{
					'name': 'Scooter',
					'value': '-scooter',
					'inline': true
				},
				{
					'name': 'Dr. Patricia Tannis',
					'value': '-tannis (WIP)',
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
					'name': 'Dr. Zed',
					'value': '-zed (WIP)',
					'inline': true
				},
				{
					'name': 'Zer0',
					'value': '-zer0 (WIP)',
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
