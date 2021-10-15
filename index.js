const { Client, Intents } = require("discord.js");
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

client.login("SuperSecretBotTokenHere");