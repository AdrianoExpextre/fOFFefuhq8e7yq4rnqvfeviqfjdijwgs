const b = require('../Storange/blacklist.json');
const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
  var embed = new Discord.RichEmbed()
  .setTitle("Retringido")
  .setColor("#f45f42")
  .addField("Comand restrito, apenas proprietários do bot podem usar!")
  
    var authors = ['244489368717230090', '282504900552949760', '443890997164769280'];
    if(!authors.includes(message.author.id)) {
    message.channel.send({embed: embed});
    return;
    }
    const args2 = message.content.split(" ").slice(1).join(" ")
    try {
    const user = client.users.get(args2)
    const list = client.users.map(u => u.id)
    if (!list.includes(user.id)){
     message.channel.send("Por favor, coloque um ID de usuário válido!")
     return;
    }
      
      
    if (!b[user.id]) b[user.id] = {};
    if (!b[user.id].blacklisted) b[user.id].blacklisted = "True";
         fs.writeFile('./Storange/blacklist.json', JSON.stringify(b), (err) => {
if (err) console.error(err)
});
  
      
message.channel.send(`Usuário \`\`${user.username}\`\` agora está na blacklist do bot!`)
user.send(`${user.username}, você foi bloqueado de usar comandos do SysopCorp!`)
    } catch (err) {
        message.channel.send(`Opa! Eu não acho que este usuário seja válido! \n**\`\`\`js${err.stack}\`\`\`**`)
    }
}