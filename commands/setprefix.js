const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Desculpe, você não pode fazer isso!").then(msg => msg.delete(3000));
	if (!args[0]) return message.channel.send(`Por favor insira novo prefixo`).then(msg => msg.delete(3000));
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

	prefixes[message.guild.id] = {
		prefixes: args[0]
	};

	fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
		if (err) console.log(err);
	});
  console.log(args[0])
}

exports.help = {
	name: "prefix",
	description: "Muda o prefix",
	usage: `r!prefix !`
}