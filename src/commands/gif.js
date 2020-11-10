import fetch from 'node-fetch';
import querystring from 'querystring';

export default {
    name: 'gif',
    description: 'gets a random gif based on <search term>',

    run: async (client, message, args) => {
        if (args.length < 1) {
            await message.reply('please enter a search term');
            await message.channel.send('Usage: .gif <search term>');
            return;
        }

        const qstr = querystring.stringify({
            q: args.join(' '),
            api_key: process.env.GIPHY_TOKEN,
            limit: 25
        });

        try {
            const res = await fetch(`https://api.giphy.com/v1/gifs/search?${qstr}`);
            const json = await res.json();

            if (json.meta.status === 429) {
                await message.reply('I need a break - try again later');
                return;
            }

            if (json.meta.status === 404 || json.data.length < 1) {
                await message.reply('I was not able to find a gif that matches your search term');
                return;
            } 

            const randomIndex = Math.floor(Math.random() * Math.floor(json.data.length)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            await message.channel.send(json.data[randomIndex].url);
        } catch (error) {
            await message.reply('I ran into some issues - please try again later');
        }
    }
}