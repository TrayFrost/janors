/**
 * Created by Илья on 21.03.2016.
 */
'use strict'
var Config = require("../../config.json");
var request = require('request');

function Test(bot, msg, suffix) {
    console.log();

    // msg.channel.send("<@&435380257265287178>", {
    //     embed: {
    //         title: "",
    //         description: "",
    //         color: 1255
    //         ,fields:[
    //             {
    //                 name: "**PLAYERUNKNOWN'S BATTLEGROUNDS**",
    //                 value: "```PUBG (солим (слезами (врагов (от смеха)))```https://www.twitch.tv/trayhardplay",
    //                 inline: false
    //             }
    //         ]
    //         ,thumbnail: {
    //             url: "https://static-cdn.jtvnw.net/jtv_user_pictures/d10964ed-068b-4981-9b48-3466fbe6263e-profile_image-300x300.png",
    //             height: 550,
    //             weight: 250
    //         }
    //         ,author: {
    //             name: "TrayHardPlay: поток подрублен!",
    //             url: "https://www.twitch.tv/trayhardplay",
    //             icon_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/d10964ed-068b-4981-9b48-3466fbe6263e-profile_image-300x300.png"
    //         }
    //         ,provider:{
    //             name: "TRAY",
    //             url: "https://www.twitch.tv/trayhardplay"
    //         }
    //         // ,footer: {
    //         //     text: "https://www.twitch.tv/trayhardplay",
    //         //     icon_url: "https://cdn.discordapp.com/avatars/154325300346355713/7da7e4fe880cfca1c907878e3d97de44.png",

    //         // }
    //     }
    // });
    var userID = "114077213"; // trayhardplay UserID 114077213 
var serverID = "154328532875608075";
var roleName = "Зрители"
    var options = {
        url: 'https://api.twitch.tv/kraken/streams/'+userID,
        headers: {
          'Client-ID': Config.clientID,
          'Accept': 'application/vnd.twitchtv.v5+json'
        }
      };
      //info.stream.preview.large
    request(options, (error, response, body)=> {
        if (!error && response.statusCode == 200) {
          var info = JSON.parse(body);
          console.log("BODY:");
          console.log(info.stream.game);
          bot.channels.find("name","tests").send("", {  //"<@&"+roleID+">"
            embed: {
                title: "",
                description: "",
                color: 1255
                ,fields:[
                    {
                        name: "**"+info.stream.game+"**",
                        value: "```"+info.stream.channel.status+"```https://www.twitch.tv/trayhardplay",
                        inline: false
                    }
                ],
                image: {
                    url: info.stream.preview.large
                }
                ,author: {
                    name: "TrayHardPlay: поток подрублен!",
                    url: "https://www.twitch.tv/trayhardplay",
                    icon_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/d10964ed-068b-4981-9b48-3466fbe6263e-profile_image-300x300.png"
                }
                ,provider:{
                    name: "TRAY",
                    url: "https://www.twitch.tv/trayhardplay"
                }
                // ,footer: {
                //     text: "https://www.twitch.tv/trayhardplay",
                //     icon_url: "https://cdn.discordapp.com/avatars/154325300346355713/7da7e4fe880cfca1c907878e3d97de44.png",
                // }
            }
        });
        } else if (error) {
            console.log(error);
        }
    });
    // request(options, (error, response, body)=> {
    //     if (!error && response.statusCode == 200) {
    //       var info = JSON.parse(body);
    //       console.log("BODY:");
    //       console.log(info.stream.game);
    //       msg.channel.send(info.stream.channel.display_name+" запустил стрим!\n"+
    //       "Игра: "+info.stream.game+"\n"+
    //       "Заголовок: "+info.stream.channel.status+"\n", {
            
    //       })
    //     } else if (error) {
    //         console.log(error);
    //     }
    // });



    //msg.author.send("```"+msg+"```");
    // msg.channel.send("", {
    //     embed: {
    //         title: "__**Информация о сервере**__",
    //         description: "**Треева Берлога** это сервачок \"для своих\" с валом локальных мемасов, "+
    //         "кучкой кодеров и гапшой геймеров.\n\nСюда не попадают случайно, здесь нет "+
    //         "тех, кого мы не знаем, все новички это чьи-то друзья и знакомые, "+
    //         "а также некоторые зрители со стримов Трея. \n\nСсылочка на него есть в разделе #info "+
    //         "или по команде !stream.",
    //         color: 1255
    //         ,fields:[
    //             {
    //                 name: "PUBG",
    //                 value: "Большой",
    //                 inline: true
    //             },
    //             {
    //                 name: "CSGO",
    //                 value: "Большой",
    //                 inline: true
    //             },
    //             {
    //                 name: "PUBG",
    //                 value: "Большой",
    //                 inline: true
    //             },
    //             {
    //                 name: "CSGO",
    //                 value: "Большой",
    //                 inline: true
    //             }
    //         ]
    //         ,thumbnail: {
    //             url: "https://static-cdn.jtvnw.net/jtv_user_pictures/d10964ed-068b-4981-9b48-3466fbe6263e-profile_image-300x300.png",
    //             height: 550,
    //             weight: 250
    //         }
    //         ,author: {
    //             name: "Tray",
    //             url: "https://vk.com/trayhardplay",
    //             icon_url: "https://cdn.discordapp.com/avatars/154325300346355713/7da7e4fe880cfca1c907878e3d97de44.png"
    //         }
    //         ,provider:{
    //             name: "TRAY",
    //             url: "https://vk.com/trayhardplay"
    //         }
    //         // ,footer: {
    //         //     text: "FOOTER",
    //         //     icon_url: "https://cdn.discordapp.com/avatars/154325300346355713/7da7e4fe880cfca1c907878e3d97de44.png",

    //         // }
    //     }
    // });
    //"<@"+msg.author.id+">:"
    //bot.sendMessage(msg.channel, " ");
}
/*===============================================================================*/
/*===============================================================================*/
/*===============================================================================*/
module.exports = Test;