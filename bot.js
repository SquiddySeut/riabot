const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'issei') {
    	message.reply('If you do not tell me where Issei is, I will murder you');
  	}
    if (message.content === 'oppai') {
        message.reply('You p-p-pervert!');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
