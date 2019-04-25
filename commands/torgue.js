module.exports = async ( client, message, doQuote, doQTorgue ) => {

function getRandomInt(max)
{
	return Math.floor(Math.random()*Math.floor(max));
};
//creates variables and variable array for use later on with individual sub commands.
const authorImage = 'http://static.tumblr.com/a295b37dd192646fa1fd7fb66092af0f/djayg0e/04Ensfpqb/tumblr_static_6rqhssg0lxk4kwoko40cs8ws8.png';
const thumbImage = ['MR. F*CKING TORGUE', 'http://img3.wikia.nocookie.net/__cb20140124073840/fallout/images/7/79/TOCI_Mr_Torgue.jpg'];

let embed = {};

    try {

        let quotes = require("./Quotes.json")["Torgue"];
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

};
