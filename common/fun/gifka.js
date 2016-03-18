/**
 * Created by Илья on 17.03.2016.
 */
'use strict'
function gifka(bot, msg, suffix) {
    var query = suffix;
    if (!query) {
        bot.sendMessage(msg.channel, "Используй: **`!гифка`** `категория`");
        return;
    }
    var tags = suffix.split(" ");
    get_gif(tags, function(id) {
        if (typeof id !== "undefined") {
            bot.sendMessage(msg.channel, "http://media.giphy.com/media/" + id + "/giphy.gif");
        } else {
            bot.sendMessage(msg.channel, "Я не могу найти гифку из категории: " + tags);
        }
    });
}

function get_gif(tags, func) {
    //limit=1 will only return 1 gif
    var params = {
        "api_key": "dc6zaTOxFJmzC",
        "rating": "r",
        "format": "json",
        "limit": 1
    };
    var query = qs.stringify(params);
    if (tags !== null) {
        query += "&q=" + tags.join('+')
    }

    var request = require("request");

    request("http://api.giphy.com/v1/gifs/search" + "?" + query, function(error, response, body) {
        var responseObj = JSON.parse(body)
        if (responseObj.data.length) {
            func(responseObj.data[0].id);
        } else {
            func(undefined);
        }
    }.bind(this));
}
/*===============================================================================*/
/*===============================================================================*/
/*===============================================================================*/
module.exports = gifka;