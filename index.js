const { Client, Intents } = require("discord.js");
const chalk = require('chalk');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS]
});

client.on("ready", () => {
  console.log(chalk.magenta("Bot has loaded up."));
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;
  if (commandName === 'ping') {
    await interaction.reply('pong!');
  }
});

client.login("OTAxMDc0NDc4NDk3NDA2OTc2.YXKlAA.949B2urd6dHQbZpFD9gklblXmas");