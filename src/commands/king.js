import { ReactionUserManager } from "discord.js";

export default {
    name: 'king',
    description: 'hail the king',

    run: async (client, message, args) => {
        await message.channel.send(':crown: All hail King Henrik Abel! :crown:');
    }
}