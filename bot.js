const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();



/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
console.log(`[M] ${client.users.size}`)
    client.user.setStatus("dnd")
});






client.on('guildMemberAdd',async member => {

var Canvas = require("canvas-prebuilt")
  var jimp = require('jimp');
  const w = ['./w1.png'];
        let Image = Canvas.Image,
             canvas = new Canvas(800, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();
 
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 800, 300);
 
})
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
 
          ctx.font = '36px Arial';
          ctx.fontSize = '72px';
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(member.user.username, 380, 177);
         

         
         
         
          let Avatar = Canvas.Image;
          let ava = new Avatar;
          ava.src = buf;
          ctx.beginPath();
          ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(ava, 36, 21, 260, 260);
           
          const c = client.channels.get("445909472452280322");
          c.sendFile(canvas.toBuffer());
 
});
});
});



























const adminprefix = "Ad";
const devs = ['472052319006228509'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});



client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let args = message.content.split(" ");
  let command = args[0];

  if(message.content.startsWith("مسح")) {
    if(!message.member.hasPermission("MANAGEP_MESSAGES")) return message.reply('**انت لا تملك الخصائص الكافية.**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!args[1]) {
      var stop = true;
      var msg = parseInt(100);

      stop = false;
      setTimeout(() => {
        stop = true;
      },3005);
      setInterval(() => {
        if(stop === true) return;
        message.channel.fetchMessages({
          limit: msg
        }).then(m => {
          message.channel.bulkDelete(msg).then(() => {
            message.channel.send(`${message.author},\n\`\`\`تم مسح الرسائل بنجاح\`\`\``).then(msg => {
              msg.delete(3000);
            });
          });
        });
      },1000);
    } else if(args[1]) {
      if(args[1] <= 100) {
          message.channel.fetchMessages({
              limit: msg
          }).then(m => {
              message.channel.bulkDelete(m).then(() => {
                  message.channel.send(`${message.author},\n\`\`\`تم مسح الرسائل بنجاح\`\`\``).then(msg => {
              msg.delete(3000);
                  });
              });
          });
      } else if(args[1] <= 200) {
        stop = true;
        setTimeout(() => {
          stop = false;
        },2001);
        setInterval(() => {
          if(stop === true) return;
          message.channel.fetchMessages({
            limit: msg
          }).then(m => {
            message.channel.bulkDelete(m).then(() => {
                message.channel.send(`${message.author},\n\`\`\`تم مسح الرسائل بنجاح\`\`\``).then(msg => {
              msg.delete(3000);
                  });
            });
          });
        },1000);
      } else if(args[1] <= 300) {
        stop = true;
        setTimeout(() => {
          stop = false;
        },2001);
        setInterval(() => {
          if(stop === true) return;
          message.channel.fetchMessages({
            limit: msg
          }).then(m => {
            message.channel.bulkDelete(m).then(() => {
            message.channel.send(`${message.author},\n\`\`\`تم مسح الرسائل بنجاح\`\`\``).then(msg => {
              msg.delete(3000);
                  });
            });
          });
        });
      }
    }
  }
});
 
   
   
   
  
  


   
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
