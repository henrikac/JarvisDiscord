import { MessageEmbed } from 'discord.js';

export default {
    name: 'help',
    description: 'Get a list of available commands',

    run: async (client, message, args) => {

        const help = new MessageEmbed()
            .setTitle('Available commands:');

        for (const command of client.commands)
            help.addField(`.${command[1].name}`, `${command[1].description}`);

        await message.channel.send(help);
    }
}