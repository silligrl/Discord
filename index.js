const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1204615465494646814')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=VuNIsY6JdUw') //Must be a youtube video link 
    .setState('being silli willi')
    .setName('')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1198762671080743103/1204618021419884574/Kawaiicore_pfp_2_.jpg?ex=65d562f5&is=65c2edf5&hm=b0da7ccaf9fb0cc35b6c845d5d67aac2e3aa2358de2557c9d4a8d03d3e84903f&=&format=webp&width=414&height=420') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('silli willi') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1198762671080743103/1204618623876857946/wirwed_.jpg?ex=65d56384&is=65c2ee84&hm=51ea327205bef6b216ee0288ed40af46982d4ed1e93eeeb442d4d9291aee902a&=&format=webp&width=420&height=420') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('aaaaa') //Text when you hover the Small image
    .addButton(' :3', 'https://www.youtube.com/watch?v=XqN2qFvY64U')
    .addButton(' mi', 'https://www.pinterest.com/lttlpupie/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
