const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready' () => {
    console.log('I am ready");
});

client.on('message', message => {
    if (message.content === "ping') {
        message.reply('pong');
    }
});

//keep the thing below
client.login(process.env.BOT_TOKEN);
//DYwMTc4OTAyNDg1MDQxMTcy.DhBBQg.cIOcSoPyLxK63pP18sF5sUHGwsM bot token
