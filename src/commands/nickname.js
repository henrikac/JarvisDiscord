export default {
    name: 'nick',
    descripttion: 'change your nickname',

    run: async (client, message, args) => {
        if (message.author.id === message.guild.ownerID) {
            await message.reply('I am not allowed to change the nickname of the server owner');
            return;
        }

        if (args.length < 1) {
            await message.reply('please enter your new nickname');
            await message.channel.send('Usage: .nick <nickname>')
            return;
        }

        try {
            if (message.member.guild.me.permissions.has('MANAGE_NICKNAMES')) {
                await message.member.setNickname(args[0]);
            } else {
                await message.reply('I do not have permission to change your nickname');
            }
        } catch (error) {
            await message.reply('I am not configured to change your nickname')
        }
    }
}