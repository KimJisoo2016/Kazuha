const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");





const bot = new AoiClient({
    token: process.env.token,
    prefix: ["$getGuildVar[prefix]"], //change it later or now
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers","GuildPresences"],
    events: ["onMessage", "onInteractionCreate", "onMessageUpdate","onMessageDelete",  "onGuildJoin",],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});




const express = require("express");
const app = express();
app.listen(4004,()=>console.log("I'm ready to host"))

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")


/* Custom Functions Loader */
let fs = require("fs"), funcs=fs.readdirSync('./functions').forEach(x=>{bot.functionManager.createFunction({name:"$"+x.split(".")[0],type:"djs",code:require("./functions/"+x)})})

require('./database/variable.js')(bot);

const keep_alive = require(`./keep_alive.js`)
