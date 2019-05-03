module.exports = async (client, message) => {
  try {
    let embed = {}
    embed.title = "HELP!"
  embed.description = "This bot displays a random quote from several Characters from the Borderlands Universe.  See below for the characters that are available to use now!",
  embed.author =  {
    "name": "BL Quote-Bot",
    "icon_url": "http://static.tumblr.com/a295b37dd192646fa1fd7fb66092af0f/djayg0e/04Ensfpqb/tumblr_static_6rqhssg0lxk4kwoko40cs8ws8.png"
  },
  embed.color = 0x2a6ebb;
  embed.footer =  {
    "text": "Created by: Captain Hammer & KaosZman"
  },
  embed.image = {
    'url':"https://i.imgur.com/WbwKZGI.png",
    'width':  512,
    'height': 512
  }
  embed.fields = [
    {
      "name": "Brick",
      "value": "-brick",
      "inline": true
    },
    {
      "name": "Claptrap",
      "value": "-clap",
      "inline": true
    },
    {
      "name": "Handsome Jack",
      "value": "-jack",
      "inline": true
    },
    {
      "name": "Krieg",
      "value": "-krieg",
      "inline": true
    },
    {
      "name": "Mad Moxxi",
      "value": "-moxxi",
      "inline": true
    },
    {
      "name": "Random",
      "value": "-random (WIP)",
      "inline": true
    },
    {
      "name": "Tiny Tina",
      "value": "-tina",
      "inline": true
    },
    {
      "name": "Mr. Torgue Flexington",
      "value": "-torgue",
      "inline": true
    },
    {
      "name": "`---------------------------------------------------`",
      "value": "\u200B"
    },
    {
      "name": "Hidden Surprise!!!",
      "value": "There is a hidden surprise for those that care to look for it.",
      "inline": false
    },
    {
      "name": "Invite",
      "value": "Invite this bot to your server with:  **`-invite`**",
      "inline": false
    }
  ],
  //embed.description += "`----------------------------------------`\n";
  embed.timestamp = new Date();
  message.react("ℹ");
  message.channel.send({ embed });
} catch (e) {
  throw e;
}
};
