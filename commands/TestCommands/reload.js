exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  try {
    if (!args || args.length < 1) return message.reply('Must provide a command to reload. Derp.');

    let commandName = args[0];

    if (client.commands.has(commandName)) {
      // no op
    } else if (client.aliases.has(commandName)) {
      commandName = client.aliases.get(commandName);
    }

    let response = await client.unloadCommand(commandName);
    if (response) return message.reply(`Error Unloading: ${response}`);
    await client.shard.broadcastEval(`this.unloadCommand("${commandName}");`);

    response = client.loadCommand(commandName);
    if (response) return message.reply(`Error Loading: ${response}`);
    await client.shard.broadcastEval(`this.loadCommand("${commandName}");`);

    response = await client.unloadReaction(commandName);
    await client.shard.broadcastEval(`this.unloadReaction("${commandName}");`);
    response = client.loadReaction(commandName);
    await client.shard.broadcastEval(`this.loadReaction("${commandName}");`);

    message.reply(`The command \`${commandName}\` has been reloaded`);
  } catch (error) {
    console.error(error);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rl'],
  permLevel: 'Bot Admin'
};

exports.help = {
  name: 'reload',
  category: 'System',
  description: 'Reloads a command that\'s been modified.',
  usage: 'reload [command]'
};
