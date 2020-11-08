import { MessageEmbed } from 'discord.js';

export default {
    name: 'help',
    description: '',

    run: (client, message, args) => {

        // TODO: .addField dynamicly
        const help = new MessageEmbed()
            .setTitle('Available commands:')
            .addField('.help', 'displays a list of my available commands')
            .addField('.ping', 'ping pong')
            .addField('.king', 'hail the king');

        message.channel.send(help);
    }
}