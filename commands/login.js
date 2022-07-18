module.exports.run = (client, message, args, userData, userAdd, userRe, number) => {
  const username = message.author.username;
  const id = message.author.id;
  const profile = message.author.avatarURL();
  const server = message.channel.id;
  const channel = client.channels.cache.get('997489495115046912');
  //console.log(typeof id);
  if (server == '997496232396206110') {
    if (userData[number].id == id) {
       message.author.send('You logged!');
       channel.send('Joined a existing user!');
       const Role = message.guild.roles.cache.get("976702615888986143");
       const Role1 = message.guild.roles.cache.get("997490893584085073");
         Role.members.forEach((member, i) => {
        setTimeout(() => {
        member.roles.remove(Role);
        member.roles.add(Role1);
    }, i * 1000);});
    } else {
       userAdd(username, id, profile, server);
       message.reply('Hey '+username+'. Your successfully logged.');
       setTimeout(function() {
         var discord = require('discord.js');
         let embed = new discord.MessageEmbed()
           .setTitle("🌱Logged new user")
           .addFields(
              { name: `Username`, value: `${username}.` },
              { name: `Id`, value: `${id}.` },
              { name: `Discord joined`, value: `${message.author.createdAt}` },
              )
           .setFooter('Logged')
           .setImage(profile)
           .setTimestamp()
           .setColor("RANDOM")
         channel.send({ embeds : [embed] });
    return;
       }, 1000);
       const Role = message.guild.roles.cache.get("976702615888986143");
       const Role1 = message.guild.roles.cache.get("997490893584085073");
Role.members.forEach((member, i) => {
    setTimeout(() => {
        member.roles.remove(Role);
        member.roles.add(Role1);
    }, i * 1000);
});
    }
  }
}
