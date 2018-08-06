const Discord = require("discord.js");
const Guardian = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const cfg = require("./config.json");
const config  = require("./config.json");
const YTDL = require('ytdl-core');
var database = require("./database.js");
const db = require('quick.db');
const moment = require('moment');
let reload    = require('require-reload')(require),
	utils     = reload('./utils/utils.js'),
	comandos  = require('./utils/comandos.js'),
	logger    = new (require('./utils/Logger.js'))(config.logTimestamp);



Guardian.commands = new Discord.Collection();
const queue = new Map();

fs.readdir("./commands/", (err, files) => {

	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Comando não encontrado!");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		music.commands.set(props.help.name, props);
	});
});

Guardian.on("ready", (message) => {
Guardian.user.setPresence({
        status: 'dnd',
        game: {
            name: `Segurança Máxima!`,
            url: 'https://www.twitch.tv/adrianocruz1105'
        }
});
});

Guardian.on('message', async message => {
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
	  if (!prefixes[message.guild.id]) {
		prefixes[message.guild.id] = {
			prefixes: cfg.prefix
		};
    }

    let prefix = prefixes[message.guild.id].prefixes;
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if (!msg.startsWith(prefix)) return;
    if (sender.bot) return;
    
    try {
        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(Guardian, message, args, queue); 
    } catch(e) { 
        console.log("atá"); 
    } finally { 
        console.log(`${message.author.username} Usou o comando:   ${cmd}, na guild: ${message.guild.name}`);
	}
}); 
 Guardian.on("error", (e) => console.log(e));
 Guardian.on("warn", (e) => console.log(e));
 Guardian.on("debug", (e) => console.log(e));


module.exports = {
	task(Guardian, message, name) {
		if (name) {
			let comando = reload(`./comandos/${name}.js`);
			comando.usersOnCooldown = new Set();
			comandos.set(name, comando);
			return message.reply(`:cyclone: | O Comando ** ${name}** foi atualizado!`);
		} else
			return message.reply('Especifique um comando');
	}
};


fs.readdir("./comandos/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(name => {
		let nome = name.split('.')[0];
		require(`./comandos/${name}`).usersOnCooldown = new Set();
		comandos.set(nome, require(`./comandos/${name}`));
	});
});
  

Guardian.on('ready', () => {
 var a = '244489368717230090';
var embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/429458467988832257/469723736300453901/SysopLogo.png')
    .setDescription(`<:SysopLogoEMOI:439565791357042700> Sysop foi reiniciado pelo heroku.\n\nSysopGuide reiniciado pelo clound9.\n\nMemória: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MS`)
    .setColor(0x0df7eb);  							 
    Guardian.users.get(a).send({embed});    
    
});

Guardian.on("ready", () => {
   logger.logWithHeader('Estamos online!', 'bgRed', 'black',  `Online! S:${client.guilds.size} | U:${Guardian.users.size}`);
    var statusIDO = ["idle", "dnd"]
 
    var jogando = [`Alegria`, `AMOOR`, `Comandos? sy!help`, `para ${Guardian.guilds.size} servidores`]

    
    Guardian.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/adrianocruz1105")
    Guardian.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    Guardian.guilds.get("441766085809799198").members.map(a =>
    setInterval(() => {
        Guardian.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/adrianocruz1105")
        Guardian.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)])}, 1 * 1000 * 60));
});

Guardian.on('guildMemberAdd', member => {
database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
if (!sysop)  return;
if (!sysop.autorole) return;	
if (sysop) {	
member.addRole(sysop.autorole)
sysop.save();
}
});
});

Guardian.on('guildMemberAdd', member => { 
  database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.welcome) return;
    if(!sysop.welcomeChannel) return;
    if(!sysop.logger) return;
    if(!Guardian.guilds.get(member.guild.id).channels.get(sysop.welcomeChannel)) return;
  if (sysop) {
    let mensagem = sysop.welcome.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);
    Guardian.guilds.get(member.guild.id).channels.get(sysop.welcomeChannel).send(mensagem)
   //LOGGS
let server = member.guild;
var embed = new Discord.RichEmbed()
.setThumbnail(`${member.user.displayAvatarURL}`)
.setTitle(`**Novo usuário!**`)
.setDescription(`<:newuser:469366822500564993> | ${member} entrou no servidor.\n**ID** ${member.id}`)
.setFooter(server.name)
.setColor('#36393E');
Guardian.guilds.get(member.guild.id).channels.get(sysop.logger).send(embed)
    }
  })
  database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.dm) return;
    if (sysop) {
    let mensagem = sysop.dm.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);
    Guardian.users.get(member.id).send(mensagem)
    }
  })

});
Guardian.on('guildMemberRemove', member => {
  database.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.byeChannel) return;
    if(!sysop.bye) return;
    if(!sysop.logger);
    if(!Guardian.guilds.get(member.guild.id).channels.get(sysop.byeChannel)) return;
  if (sysop) {
    let mensagem = sysop.bye.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);
    Guardian.guilds.get(member.guild.id).channels.get(sysop.byeChannel).send(mensagem)
//LOGGS    
let server = member.guild;
var embed = new Discord.RichEmbed()
.setThumbnail(`${member.user.displayAvatarURL}`)
.setTitle(`**Usuário Quitou!**`)
.setDescription(`<:userleft:469366822487982080> | ${member} saiu do servidor.\n**ID** ${member.id}`)
.setFooter(server.name)
.setColor('#36393E');
Guardian.guilds.get(member.guild.id).channels.get(sysop.logger).send(embed)
    }
  })
});







Guardian.on("message", message => {
if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop && sysop.convites && message.content.search('discord.gg') > -1) {	
message.delete();
return message.channel.send(`<:FalseSysop3:462306755150479372> | ${message.author} Você não pode enviar convites de outros servidores aqui!`).then(sentMsg => sentMsg.delete(60000));
}}
});
}
});

Guardian.on("messageUpdate", (newMessage, oldMessage) => {	
if (oldMessage.guild) {
database.Guilds.findOne({"_id": oldMessage.guild.id}, function(erro, sysop) {
if (sysop) {
if (sysop && sysop.convites && oldMessage.content.search('discord.gg') > -1) {
oldMessage.delete();
return newMessage.channel.send(`<:FalseSysop3:462306755150479372> | ${newMessage.author} Você não pode enviar convites de outros servidores aqui!`).then(sentMsg => sentMsg.delete(60000)) 
}}
});
}
});

Guardian.on("message", message => {
if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop && sysop.sugest && message.channel.id == sysop.sugest)
message.react('👍').then(message.react('👎')).then(message.react(':FalseSysop3:462306755150479372'))  
}
});
}
});

Guardian.on('message', message => {
    if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {    
    if (sysop && sysop.words) {
			sysop.words.every(e => {
				if (message.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					message.delete();
					message.reply("Cuidado com o palavreado!!! :rage:").then(sentMsg => sentMsg.delete(10000));
					return false;
				} else return true;
			});
    }}});
}
});

Guardian.on('messageUpdate', (oldMessage, newMessage) => {
    if (oldMessage.guild) {
database.Guilds.findOne({"_id": oldMessage.guild.id}, function(erra, sysop) {
if (sysop) {    
    if (sysop && sysop.words) {
			sysop.words.every(e => {
				if (oldMessage.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					oldMessage.delete();
					newMessage.reply("Cuidado com o palavreado!!! :rage:").then(sentMsg => sentMsg.delete(10000));
					return false;
				} else return true;
			});
    }}});
}
});


Guardian.on('channelCreate', (channel) => {
if (channel.guild) {    
database.Guilds.findOne({"_id": channel.guild.id}, function(erra, sysop) {
    
    if (sysop) {    
    if (sysop.logger) {


if(channel.author.bot) return;
let user = channel.mentions.users.size > 0 ? channel.mentions.users.first() : channel.author;
let server = user.guild;


var embed = new Discord.RichEmbed()
.setThumbnail(`${user.avatarURL}`)
.setTitle(`**Canal Criado**`)
.setDescription(`**${channel.name}** foi criado.\n
**Criado por:** ${channel.author}`)
.setFooter(server.name)
.setColor('#36393E');
channel.guild.channels.get(sysop.logger).send({embed});
}}});
}});





Guardian.on('messageUpdate', (oldMessage, newMessage) => {
if (newMessage.guild) {    
database.Guilds.findOne({"_id": oldMessage.guild.id}, function(erra, sysop) {

  if (sysop) {    
  if (sysop.logger) {


if(newMessage.author.bot) return;
let user = oldMessage.mentions.users.size > 0 ? oldMessage.mentions.users.first() : oldMessage.author;
let server = oldMessage.guild;


var embed = new Discord.RichEmbed()
.setThumbnail(`${user.avatarURL}`)
.setTitle(`**Mensagem Editada**`)
.setDescription(`**${user.username}** editou sua própria mensagem.\n
**Mensagem Antiga:**
\`\`\`${oldMessage.content}\`\`\`
**Nova Mensagem:**
\`\`\`${newMessage.content}\`\`\``)
.setFooter(server.name)
.setColor('#36393E');
newMessage.guild.channels.get(sysop.logger).send({embed});
      
  }}});
}});

Guardian.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  //
  
  
 
  try {   
         //aqui voco pode colocar qualquer nome (não esqueça de mudar o nome da pasta para o mesmo)
    let commandFile = require(`./private/${command}.js`);
    commandFile.run(Guardian, message, args);
  }catch (err) {
   
 
  }
 
});

Guardian.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      Guardian.commands.delete(command);
      Guardian.aliases.forEach((cmd, alias) => {
        if (cmd === command) Guardian.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        Guardian.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


          

Guardian.on('message', message => {
	let settings = reload('./settings.json');
    let comando = message.content.replace(config.prefix, '').split(/ |\n/)[0],
	suffix  = message.content.replace(config.prefix + comando, '').trim();
	if (message.content.startsWith(config.prefix) && comandos.has(comando)) {
		logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, config.prefix + comando, message.cleanContent.replace(config.prefix + comando, '').trim());
		 comando = comandos.get(comando.toLowerCase());                                   
		if (comando.usersOnCooldown.has(message.author.id))
			return message.reply(':warning: Você só pode utilizar este comando a cada ' + comando.cooldown + ' segundos!').then(sentMsg => sentMsg.delete(8000));
		else {
			comando.task(Guardian, message, suffix);
			if (comando.cooldown) {
				comando.usersOnCooldown.add(message.author.id);
				setTimeout(() => {
					comando.usersOnCooldown.delete(message.author.id);
				}, comando.cooldown * 1000);
			}
		} 
		
		logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, config.prefix + comando, message.cleanContent.replace(config.prefix + comando, '').trim());
		var server = message.guild;
		const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Executor:`, `\`${message.author.tag}\``, true)
        .addField(`ID do Executor`, `\`${message.author.id}\``, true)
        .addField(`Comando usado:`, `\`\`\`Markdown\n# ${message.content}\`\`\``,false)
        .addField(`Dentro do server:`,`\`\`\`Markdown\n# ${message.guild.name}\`\`\``,false)
        .addField(`Canal onde foi Executado`,`\`${message.channel.name}\``,true)
	.addField(`Total de usuários`, `\`${server.memberCount}\``, true)	
        .setFooter('SysopCorp ---- LOG COMANDOS ' + ' ---- ' + new Date())
        .setColor(0x0df7eb);
        
        Guardian.guilds.get('441766085809799198').channels.get('444075851919654912').send({ embed });
	}
});

Guardian.on('guildCreate', guild => {
  let ID = "244489368717230090";

  
    console.log(`O servidor: ${guild.name}  adicionou o seu bot `)
    
    const embed = new Discord.RichEmbed()
    .setAuthor(guild.name, guild.iconURL)
    
        .setColor(0x4959e9)
        .addField("GOD", `**O servidor: __${guild.name}__ >adicionou o bot ___${client.user.username}__: ** `)
        .setThumbnail(guild.iconURL)
        .addField("Dono:",`<@${guild.ownerID}>`,true)
        .addField("Membros:",`${guild.members.size}`,true)
        .addField(":smiling_imp: __**Servidores atuais:**__", `\`\`\`js\n${Guardian.guilds.size}\`\`\``)
 
        .setTimestamp()
        Guardian.guilds.get("441766085809799198").members.map(a =>
        Guardian.users.get(a.id).send({embed})).catch(e => console.log(e));
        
							  
});

/*const DBL = require ("dblapi.js");
const dbl = new DBL (config.DBL);

client.on ('ready', () => {
  setInterval (() => {
      dbl.postStats (client.guilds.size);
  }, 18000);
});*/

Guardian.login(process.env.Secrect);



Guardian.on('ready', async () => {
    console.log(`${Guardian.user.username} está on!`);
});
