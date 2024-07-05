const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready, my master")
});


client.on("message", message => {
  if(message.content === "!ping") {
    return message.channel.send("Pong " + client.ws.ping )
  }
})

client.on("message", message => {
  if(message.content === "!yt") {
    return message.channel.send("https://www.youtube.com/channel/UCeSZb2VlKWzTR5GdbHBNLAg" )
  }
})

client.on("message", message => {
  if(message.content === "!twitter") {
    return message.channel.send("https://twitter.com/inv_gamerz?s=08" )
  }
})

client.on("message", message => {
  if(message.content === "!instagram") {
    return message.channel.send("https://instagram.com/gamerzinvincibles?igshid=1nmle4ate3jql" )
  }
})

client.on("message", message => {
  if(message.content === "!discord") {
    return message.channel.send("https://discord.gg/etwmdvUEW8" )
  }
})

client.login("ODI4ODk1MDI2NzkxOTcyOTE0.YGwOpg.QKwx2ObxFE218B7Ufo1SEADa1m0")
