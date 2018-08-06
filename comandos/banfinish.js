const Discord = require("discord.js");

module.exports = {
    description: 'Bano usuários do servidor com motivo.',
    categoria: 'Moderação',
    task(Guardian, message, suffix) {
     message.delete();
 
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **The Guardian**! Se você acha que isso é um engano, nos contate.");
        
}

if (!message.member.hasPermission('BAN_MEMBERS')) 
return message.reply('<:xguardian:476061993368027148> Desculpe, você não tem permissão de banir usuário neste servidor!');

      
            let args = suffix.split(' '); 
            let igor =  args.slice(1).join(' ') 
            ? args.slice(1).join(' ')
            :  "Foi banido! Motivo não especificado.";



let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.reply("<:sysalerta:469789950938841088> Não encontrei nenhum usuário.");

let banPerms = message.guild.member(client.user).hasPermission('BAN_MEMBERS')
if (!banPerms)  return message.reply("<:xguardian:476061993368027148> Eu não tenho permissão para banir usuários neste servidor.");

let user = Guardian.users.has(id) ? Guardian.users.get(id) : null;

if (!user) return message.reply("<:sysalerta:469789950938841088> Não encontrei nenhum usuário");
let bannable = message.guild.member(id)
if (bannable) {  
    if (bannable.highestRole.position >= message.member.highestRole.position) return message.reply("<:xguardian:476061993368027148> Você não pode banir este usuário pois seu cargo é menor ou igual a o do usuário a ser banido!")
    
    if (!message.guild.member(user).bannable) return message.reply('Eu não posso banir esse usuário.');
    
} else {

    message.guild.ban(user, igor);
    let server = message.guild
    const embed1 = new Discord.RichEmbed()
    .setTitle(`🚫 Member Banned`)
    .addField(`**User banned:**`, user)
    .addField(`**Server when banned:**`, server.name)
    .addField(`**Reazon:**`, igor)
    .addField(`**Executor:**`, message.author)
    .setThumbnail('https://i.imgur.com/etOfjIY.png')
    .setColor(0x26dfd6)
    message.channel.send({embed1});
    user.send({embed1})
}
if (user) {

   
    message.guild.ban(user, igor);
    let server = message.guild
    const embed = new Discord.RichEmbed()
    .setTitle(`🚫 Member Banned`)
    .addField(`**User banned:**`, user)
    .addField(`**Server when banned:**`, server.name)
    .addField(`**Reazon:**`, igor)
    .addField(`**Executor:**`, message.author)
    .setThumbnail('https://i.imgur.com/etOfjIY.png')
    .setColor(0x26dfd6)
    message.channel.send({embed});
    const embed3 = new Discord.RichEmbed()
    user.send({embed});
} else {
    message.reply('Não encontrei nenhum usuário');

}
    
}
};
