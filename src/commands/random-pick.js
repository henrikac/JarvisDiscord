export default {
    name: 'random-pick',
    description: 'randomly picks n people from the server',

    run: async (client, message, args) => {
        let numUsersToPick = 1;
        const users = [];
        
        message.guild.members.cache.forEach(member => {
            if (!member.user.bot) {
                users.push(member.user.username);
            }
        });

        if (args.length > 0) {
            if (isNaN(args[0])) {
                await message.channel.send('\`Usage: .random-pick <optional: number of users to pick>\`');
                return;
            }

            const newNum = parseInt(args[0]);

            if (newNum < 2) {
                await message.reply('please enter a number greater than 1');
                return;
            }

            if (newNum > users.length) {
                await message.reply(`I can only pick between 1 and ${users.length} members`);
                return;
            }

            numUsersToPick = newNum;
        }

        const pickedUsers = [];
        
        do {
            const idx = Math.floor(Math.random() * numUsersToPick--);
            const user = users.splice(idx, 1)[0];
            pickedUsers.push(user);
        } while (numUsersToPick > 0);
        
        await message.channel.send(`I choose... ${pickedUsers.join(', ')}`);
    }
}