module.exports = async (client, message) => {

function getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max));
};

const authorImage = 'http://static.tumblr.com/a295b37dd192646fa1fd7fb66092af0f/djayg0e/04Ensfpqb/tumblr_static_6rqhssg0lxk4kwoko40cs8ws8.png';
const thumbImage = ['Tiny Tina', 'https://vignette.wikia.nocookie.net/borderlands/images/a/ab/Tiny_Tina-transparent-sm.png/revision/latest/window-crop/width/160/x-offset/0/y-offset/25/window-width/360/window-height/270?cb=20180419192706'];
let embed = {};

    try {

        let quotes = require("./Quotes.json")["Tina"];
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
