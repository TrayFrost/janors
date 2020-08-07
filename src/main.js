const botconfig = require("dotenv").config().parsed;
const Discord = require("discord.js");
// const db = require('./db')
const fs = require('fs');
const path = require('path');

const MODULES_FOLDER = './modules'

// const cmds = require('./cmds/index');

const bot = new Discord.Client({ disableMentions: 'everyone' });
bot.modules = new Discord.Collection();
bot.commands = new Discord.Collection();
// bot.aliases = new Discord.Collection();

bot.on("ready", () => {
    console.log("prefix:", botconfig.PREFIX);
    bot.generateInvite(["ADMINISTRATOR"]).then((link) => {
        console.log(link);
    });

    // Taking all cmd modules
    const modulesArray =
        fs.readdirSync(path.join(__dirname, MODULES_FOLDER))
            .filter(file => fs.statSync(path.join(__dirname, MODULES_FOLDER, file)).isDirectory())

    modulesArray.forEach(folder => {
        let module = require(path.join(__dirname, MODULES_FOLDER, folder))
        bot.modules.set(module.name, module);
        module.cmds.forEach(cmd => cmd.triggers.forEach(trigger => bot.commands.set(trigger, cmd)));
        console.log(`Module '${module.name}' has been loaded!`);
    })
    console.log(`The bot ${bot.user.username} has been started`);
});

bot.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.content.slice(0, botconfig.PREFIX.length) !== botconfig.PREFIX) return;
    if (message.channel.type === "dm") return;
    bot.send = function (msg) {
        message.channel.send(msg);
    };
    let args = message.content
        .slice(botconfig.PREFIX.length)
        .trim()
        .split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;
    if (bot.commands.has(cmd)) {
        commandfile = bot.commands.get(cmd);
    }
    try {
        commandfile.run(bot, message, args);
    } catch (e) {}
});

bot.login(botconfig.TOKEN);
