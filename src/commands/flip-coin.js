export default {
    name: 'flip',
    description: 'flips a coin',

    run: async (client, message, args) => {
        const coin = Math.round(Math.random());

        await message.channel.send(coin === 0 ? 'tails' : 'heads');
    }
}