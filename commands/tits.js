module.exports = async ( client, message ) => {
let embed = {}
try {
  let data = require('./bl.json')
  let char = data.characters.find(t => t.name === 'Moxxi')
  embed.color = char.data.color
  embed.image = {
    'url': "https://i.imgur.com/nsnjo5q.jpg",
    'width': 1024,
    'height': 1024
  }
  embed.title = "Ol' Balloon Tits"
  embed.author = {
    'name':"Mad Mo**XXX**i...You're Welcome Sugar",
    'url': "https://imgur.com/gallery/vu3Z4",
    'icon_url': "https://i.pinimg.com/236x/e4/1a/4c/e41a4c43e5c547993bb53027996ef344--moxxi-borderlands.jpg"
  }
  embed.timestamp = new Date()
  return message.channel.send({embed})
} catch(e) {
  console.log(e.message)
  embed.color = 0x2ad68c
  embed.title = 'Whoopsie!'
  embed.description = 'Well, thats just damn embarrising sugar!'
  embed.timestamp = new Date()
  return message.channel.send({embed})
 }
}
