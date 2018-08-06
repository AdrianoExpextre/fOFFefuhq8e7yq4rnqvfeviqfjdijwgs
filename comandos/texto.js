const database = require("../database.js");

module.exports = {
  task(Guardian, message, suffix) {

      
database.Bloqueio.findOne({"_id": message.author.id}, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
  
  const ID = "412169234492293130";
  let users = Guardian.guilds.get(ID).members.get(message.author.id);
  if (!users) 
  return message.reply("Você não está no servidor oficial do Sysop");
  let role = Guardian.guilds.get(ID).members.get(message.author.id).roles.find("id", "467669532916449290")
  if(!role)
  return message.channel.send('Woww! Você descobriu um recurso para parceiros. <:DiscordPartner:467546781538975754> Mais infos de como virar parceiro digite: sy!partners.');
   
  
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:FalseSysop3:462306755150479372> Opa! Para utilizar este comando é necessário que você tenha permissões de Administrador ou Gerenciamento de mensagens');
      
      
let args = suffix.split(' '); 
let mensagem = suffix;
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
 if(args[0] == "help"){
message.channel.send(`Hey ${user.username},\n**Use:** t!texto <mensagem> para definar o texto do contador.`);
      return;
    }
      
database.Guilds.findOne({ "_id": message.guild.id}, function(erro, documento) {
    if (!documento) {
        var server = new database.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
             welcomeChannel: '',
             byeChannel: '',
             dm: '',
			 contador: '',
             texto: '' ,
			 });
        server.save();
        message.reply('<:SysopLogoEMOI:439565791357042700> Um histórico foi criado. Use o comando novamente!');

        } else {
        if (!mensagem) {
    if (!documento.dm)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui texto no contador. Use: `t!texto <mensagem>` para setar');
   else 
   return message.channel.send(`Blz! O texto do contador atual é: ${documento.texto}`);

    } else {
        if (mensagem !== 'disable') {
            documento.texto = mensagem;
            documento.save();
            return message.channel.send(`GG ${message.author}! Você definiu o texto do contador.`);
        } else {
            documento.texto = '',
            documento.save();
            return message.channel.send('Ok! Texto do contador desativado.');
        }
    
        
    }
            
        }
});
  });
}};
