const db = require('../database.js');

module.exports = { task(Guardian, message, suffix) { message.delete(1000); 

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **The Guardian**, se você acha que isso é um engano nos contate!");
        
}						  
						  
						  
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    
if (!suffix) 
return message.reply(`Contador, como usar:\nUse \`sy!contador\` on <#channel> para definir o canal onde o contador será ativado.\nUse \`sy!contador off\` para desativar o canal do contador.`);


db.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
    if (!sysop) {
        
        var server = new db.Guilds({
            _id: message.guild.id,
             contador: '',
             texto: '' ,
        });
        server.save();
        message.reply("💥 Use o comando novamente");
    } else {
        
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
    
sysop.contador = "nada";
sysop.save();
message.channel.send('Contador desativado.');
        
 }}
}});
});
}};
