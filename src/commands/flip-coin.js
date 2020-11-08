export default {
    name: 'flip',
    description: 'flips a coin',

    run: (client, message, args) => {
        const coin = Math.round(Math.random());

        message.channel.send(coin === 0 ? 'tails' : 'heads');
    }
}