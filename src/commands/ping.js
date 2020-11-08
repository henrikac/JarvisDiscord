export default {
    name: 'ping',
    description: 'ping pong',

    run: async (client, message, args) => {
        message.channel.send('pong :ping_pong:');
    }
}