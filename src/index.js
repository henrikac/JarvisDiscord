import { Client } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client();

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.login(process.env.BOT_TOKEN);