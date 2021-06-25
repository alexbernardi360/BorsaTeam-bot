// Import external modules
import { config } from 'dotenv';
import { Client } from 'discord.js';

config();

// Create a new Discord client
const client = new Client();

// When the client is ready, run this code
// This event will only trigger one time after logging in
client.once('ready', () => {
  console.info(`Logged in as: ${client.user.tag}`);
  console.info(`${new Date().toUTCString()}`);
});

client.login(process.env.TOKEN);

client.on('message', (message) => {
  if (message.content === '/ping') {
    // Send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.');
  }
});
