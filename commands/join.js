const cfg = require("../config.json");
const Discord = require('discord.js');
const key = process.env.yt;
const fs = require("fs");
const moment = require("moment");
const yt = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(key);
const opus = require("opusscript");
const gyp = require("node-gyp");
var fetchVideoInfo = require('youtube-info');

exports.run = async(music, message, args) => {       
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('Você precisa estar em um canal de voz primeiro.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send('Já estou conectado em um canal de voz.');
    } else {
     message.channel.send('Conectando...').then(m => {
          Canalvoz.join().then(() => {
               m.edit(':white_check_mark: | Conectado com sucesso!').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
     }).catch(error => message.channel.send(error));
    }
}};
