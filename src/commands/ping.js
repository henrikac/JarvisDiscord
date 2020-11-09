export default {
    name: 'ping',
    description: 'ping pong',

    run: async (client, message, args) => {
        await message.channel.send('pong :ping_pong:');
    }
}