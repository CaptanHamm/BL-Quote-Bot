function getRandomInt(max) {
  return Math.floor(Math.random()*Math.floor(max))
}
let embed = {}
try {
  let data = require('./bl.json')
  let char = data.characters.find(t => t.name === 'Jack')
  let quotes = char.data.quotes
  let number = getRandomInt(quotes.length) - 1
  let quote = quotes[Math.max(0, number)]
  embed.color = char.data.color
  embed.thumbnail = {
    'url': char.data.imageURL,
    'width': 256,
    'height': 256
  }
  embed.author = {
    'name': char.data.title,
    'url': data.website,
    'icon_url': data.iconURL
  }
  embed.description = quote
  embed.timestamp = new Date()
  return message.channel.send({embed})
} catch(e) {
  console.log(e.message)
  embed.color = 0x2ad68c
  embed.title = 'Whoopsie!'
  embed.description = 'Something ... err ... went wrong. Git Gud Foolio!'
  embed.timestamp = new Date()
  return message.channel.send({embed})
 }
}
