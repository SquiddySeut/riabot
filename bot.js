const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'issei') {
    	message.reply('if you do not tell me where Issei is, I will murder you');
  	}
    if (message.content === 'oppai') {
        message.reply('you p-p-pervert!');
    }
    if (message.content === '~R/hug') {
        message.reply('aww, here is a hug for you!');
    }
    if (message.content === '~R/lewdme') {
        message.reply('no.');
        message('Absolutely no');
    }
    if (message.content === '~R/help') {
        message.reply('my current commands are ~R.hug and ~R/help, sorry for so little commands');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
