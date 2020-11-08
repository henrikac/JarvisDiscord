import { Client, Collection } from 'discord.js';
import dotenv from 'dotenv';
import { readdir } from 'fs';
import path from 'path';

dotenv.config();

const client = new Client();
client.commands = new Collection();

readdir(path.join(__dirname, 'commands'), (error, files) => {
    if (error) throw error;

    files.forEach(async file => {
        if (file.endsWith('.js')) {
            const command = await import(`${path.join(__dirname, 'commands', file)}`);
            client.commands.set(command.default.name, command.default);
        }
    });
});

client.once('ready', () => {
    const channel = client.channels.cache.find(channel => channel.name === 'general');

    if (channel) {
        channel.send('Hiya, I come in peace! :robot:');
    } else {
        console.log('I am online but I could not find the room');
    }

    client.user.setActivity('everyone', { type: 'WATCHING' });
});

client.on('message', message => {
    const prefix = '.';

    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
        const [cmd, ...args] = message.content
            .trim()
            .substr(prefix.length)
            .split(/\s+/);

        try {
            client.commands.get(cmd).run(client, message, args);
        } catch (error) {
            message.channel.send('type **.help** to get a list of my available commands');
        }
    }
});

client.login(process.env.BOT_TOKEN);