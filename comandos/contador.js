const db = require('../database.js');

module.exports = { task(Guardian, message, suffix) { message.delete(1000); 

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:471836227172302848> Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate!`");
        
}

const ID = "412169234492293130";
  let users = Guardian.guilds.get(ID).members.get(message.author.id);
  if (!users) 
  return message.reply("Você não está no servidor oficial do SysopCorp");
  let role = Guardian.guilds.get(ID).members.get(message.author.id).roles.find("id", "467669532916449290")
  if(!role)
  return message.channel.send('Woww! Você descobriu um recurso para parceiros. <:DiscordPartner:467546781538975754> Mais infos de como virar parceiro digite: sy!partners.');
   

if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    
if (!suffix) 
return message.reply(`Contador, como usar:\nUse \`sy!contador\` on <#channel> para definir o canal onde o contador será ativado.\nUse \`sy!contador off\` para desativar o canal do contador.`);


db.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
    if (sysop) {
switch (suffix.split(' ')[0]){
	
case 'on': {
    if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
  if (!message.mentions.channels.first()) {
   if (sysop && sysop.contador)                 
                return message.channel.send('GG! O contador foi ativado em: <#' + sysop.contador + '>');
            else
            return message.channel.send('Mencione um canal onde o contador deve ser ativado.');
        } else { 
            if (!sysop) 
                sysop = {};
            sysop.contador = message.mentions.channels.first().id;
            sysop.save();
            return message.channel.send('Ok! Canal do contador definido!');
        }}

        case 'off': {
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    
sysop.contador = "";
sysop.save();
message.channel.send('Contador desativado.');
        
 }}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugest: '',
             autorole: '',
             contador: '',
             welcome: '',
             bye: '',
             welcomeChannel: '',
             byeChannel: '',
             texto: '' 
        });
        server.save();
        message.reply("💥 Use o comando novamente");
}});
});
}};
