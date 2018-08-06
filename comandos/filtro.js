const db = require("../database.js");

module.exports = { task(Guardian, message, suffix) {

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **The Guardian**, se você acha que isso é um engano nos contate.`");
        
}

const ID = "412169234492293130";
  let users = Guardian.guilds.get(ID).members.get(message.author.id);
  if (!users) 
  return message.reply("Você não está no servidor oficial do SysopCorp");
  let role = Guardian.guilds.get(ID).members.get(message.author.id).roles.find("id", "467669532916449290")
  if(!role)
  return message.channel.send('Woww! Você descobriu um recurso para parceiros. <:DiscordPartner:467546781538975754> Mais infos de como virar parceiro digite: sy!partners.');
   


if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:xguardian:476061993368027148> Desculpe, o comando **filtro** está disponível apenas para usuários administrativos e gerenciadores de mensagens  do server.');
db.Guilds.findOne({"_id": message.guild.id }, function(erra, docu) {
if (docu) {

if (!suffix) return message.reply(`Você deve especificar um filtro. Filtros disponíveis: \`convites\``);
	
switch (suffix.split(' ')[0]){
	
case 'convites': {

if (!message.member.hasPermission('MANAGE_MESSAGES'))
return message.reply('<:xguardian:476061993368027148> Você precisa ter no minimo permissões de Gerenciamento de Mensagens para utilizar esse filtro.');

if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply('<:xguardian:476061993368027148> Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    		
    		    if (!docu) 
    			docu = {};
    			if (!!docu.convites)
    			docu.convites = !docu.convites;
    			else 
    			docu.convites = true;
    			
    			docu.save();
    			message.channel.send('Filtro de convites definido para ' + docu.convites);
    			
} 

case 'words': {

if (!message.member.hasPermission('MANAGE_MESSAGES'))
return message.reply('<:xguardian:476061993368027148> Você precisa ter no minimo permissões de Gerenciamento de Mensagens para utilizar esse filtro.');

if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply('<:xguardian:476061993368027148> Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');

 let nha = suffix.split(' ').slice(1);
		    	if (nha.length == 0) {
			    	if (!docu || !docu.words)
						return message.channel.send('Este servidor não possui filtro de palavras\n**Use:** `sy!filtro words` + as palavras a serem filtradas sem vírgulas, apenas espaço!\n\nVocê pode desativar utilizando o comando `sy!disable words`.');
		    	} else {
			    	if (!docu) 
	    				docu = {};
					
	    			docu.words = nha.filter(w => w !== ''); // filtra palavras sem nada
	    			docu.save();
	    			return message.channel.send('Filtro de palavras redefinido');
		    	}
}

}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
        });
        server.save();
        message.reply("💥 Use o comando novamente");
    
}

});
});
}};
