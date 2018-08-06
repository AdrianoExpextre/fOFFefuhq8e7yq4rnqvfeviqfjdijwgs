const database = require("../database.js");

module.exports = { categoria: 'Social', description: 'Altere sua biografia no seu perfil personalizado', task(client, message, suffix) {

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **The Guardian**, se você acha que isso é um engano nos contate!");
        
}

      suffix = suffix.split(' '); 
    database.Users.findOne({"_id":message.author.id},function(erro,documento){

    if (documento) {

        if (!suffix) return message.reply('Escreva o texto que ficará do lado do contador.');
        documento.contador = `${message.content.replace("sy!text","")}`;
        message.delete();
        message.reply(`Texto do contador alterado para: \`\`${documento.contador}\`\` `);
        documento.save();
    } else {
            
    	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
			       contador: '',
        });
        server.save();
        message.reply("💥 Use o comando novamente");
    
}

});
  })
}};
