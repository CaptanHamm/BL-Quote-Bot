module.exports = async (client, message) => {
	try {

		let embed = {};

		embed.title = client.user.username+" WIP";
		embed.description += 'Still adding these quotes\n';
		embed.color = 0x2A6EBB;
		embed.timestamp = new Date();

		message.react('ℹ');
		message.channel.send({embed});

	} catch(e) {
		throw e;
	}
	

/*
function getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max));
};

const authorImage = 'http://static.tumblr.com/a295b37dd192646fa1fd7fb66092af0f/djayg0e/04Ensfpqb/tumblr_static_6rqhssg0lxk4kwoko40cs8ws8.png';
const thumbImage = ['CL4P-TP', 'https://i.pinimg.com/originals/fd/ab/a6/fdaba6bcfd16f20fce1111756c341aed.png'];
let embed = {};

    try {

        let quotes = require("./Quotes.json")["Clap"];
        let quoteItem = quotes[getRandomInt(quotes.length)-1];

        embed.color = 0xf0ff00;
        embed.thumbnail = {"url": thumbImage[1]};
        embed.author = {
            "name": thumbImage[0],
            "url": "https://borderlands.com",
            "icon_url": authorImage
        };
        embed.description = quoteItem;
        embed.timestamp = new Date();

        return message.channel.send({embed});

    } catch(e) {

        console.log(e.message);

        embed.color = 0x2ad68c;
        embed.title = 'Whoopsie!';
        embed.description = 'Something ... err ... went wrong. Git Gud!';
        embed.timestamp = new Date();

        return message.channel.send({embed});

    }
*/
};
