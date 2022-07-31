const discord = require('discord.js');
const client = new discord.Client({ intents: ["GUILDS","GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","GUILD_MESSAGE_TYPING","DIRECT_MESSAGES","DIRECT_MESSAGE_REACTIONS","DIRECT_MESSAGE_TYPING"], partials: ["CHANNEL"] });
const token = process.env.TOKEN;
const fs = require('fs');
const path = require('path'); 
const request = require('request');
var userData = require("./users/userData.js");
var userAdd = require("./users/userAdd.js");
var userRe = require("./users/userRe.js");
var prefix = '!'; 
client.commands = new discord.Collection();
var commands = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
for(file of commands){
  const commandName = file.split(".")[0];
  const command = require(`./commands/${commandName}`);
  client.commands.set(commandName, command);
}
client.on('ready', () => {
  console.log(client.user.username+' is ready!');
  client.user.setActivity("data", {
        type: "WATCHING"
  });
});
client.on('messageCreate', message => {
  client.user.setActivity("data", {
        type: "WATCHING"
  });
  let number = 0
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].id == message.author.id) {
      number = i;
    }
  }
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift();
    const command = client.commands.get(commandName);
    if(!command) return message.reply({ content: "That command doesn't exist!"});
    command.run(client, message, args, userData, userAdd, userRe, number);
  }
});
client.login(token);
