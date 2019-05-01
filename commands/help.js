module.exports = async (client, message) => {
  try {
    let embed = {};
    embed.title = "HELP";
    embed.description = "Need help with the commands for this bot???\n";
    embed.description += "Read on below:\n";
    embed.description += "```md\n";
    embed.description += "`Help --------- help, h`\n";
    embed.description += "`Displays this message`\n";
    embed.description += "`Quote --------- q quote`\n";
    embed.description += "`Sends a quote from Borderlands`\n";
    embed.description += "`sub commands include jack/j psycho/p torgue/t`\n";
    embed.description += "`Support --------- support`\n";
    embed.description += "`Displays the support links`\n";
    embed.color = 0x2a6ebb;
    embed.timestamp = new Date();
    message.react("ℹ");
    message.channel.send({
      embed
    });
  } catch (e) {
    throw e;
  }
};
