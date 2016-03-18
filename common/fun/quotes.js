/**
 * Created by Илья on 08.03.2016.
 */
'use strict'
function Quote(bot, msg) {
    var rand = Math.floor(Math.random() * Quotes.length);
    bot.sendMessage(msg.channel, Quotes[rand]);
}
var Quotes = [
    "Все проблемы во вселенной от того, что никто никому не помогает. \n- *Энакин Скайуокер*",
    "Страх приведет к темной стороне. Страх рождает гнев; гнев рождает ненависть; ненависть — залог страданий. \n- *Эпизод I*",
    "Нельзя остановить перемены, как нельзя остановить восход солнца \n- *Эпизод I*",
    "Знание свет, путь укажет нам. \n- *Магистр Йода*",
    "Внимание управляет реальностью.\n- *Эпизод I*",
    "Концентрируйся на моменте. Чувствуй, а не думай. Используй свои инстинкты.\n- *Эпизод I*",
    "Всегда найдётся рыба больше.\n- *Эпизод I*",
    "Способность говорить — не признак интеллекта.\n- *Эпизод I*",
    "Я не одобряю любых действий, приводящих к войне.\n- *Эпизод I*",
    "— Если они считают тебя богом, может совершишь чудо и избавишь нас от них?\n- *Эпизод VI*",
    "Я сказал тебе правду. Правду — если смотреть на неё с определённой точки зрения. Многие из тех истин, которым мы доверяем, " +
    "являются таковыми лишь тогда, когда мы придерживаемся определённой точки зрения.\n- *Эпизод VI*",
    "— Ваша самоуверенность — ваша слабость.\n— Твоя вера в друзей — твоя слабость.\n- *Эпизод VI*",
    "— Темная сторона сильнее?\n— Нет. Легче, быстрее, соблазнительнее.\n- *Эпизод V*",
    "Гнев, страх, агрессия! Это Тёмная сторона Силы. Легко приходят, но тяжела цена за мощь, которую они дают.\n- *Эпизод V*",
    "Разницы нет! Разница в твоём уме! Размеры не имеют значения. Они ни при чём.\n*Эпизод V*",
    "Кто глупее: дурак, или тот, кто за ним следует?\n*Эпизод IV*",
    "Да пребудет с тобой Сила!\n- *Эпизод IV*",
    "Во всем мире не найти более порочного скопища грязи и злодейства. Мы должны быть осторожны.\n- *Эпизод IV",
    "Одно можно утверждать с уверенностью: скоро мы все сильно похудеем.\n- *Эпизод IV",
    "Я ненавидел старых людей за то что на свадьбе они меня тыкали и говорили 'ты следующий'. Так что на похоронах я говорил им 'ты следующий' .",
    "Я подумал, худший момент в жизни это когда ты умер во время игры в шарады. \n- *Деметри Мартин*",
    "Я попросил бога о велосипеде, но я знаю что бог работает не так. По этому я украл велосипед и попросил прощения. \n- *Эмо Филипс*",
    "Мистика в жизни, зачем пилоты камикадзе носили шлемы?. \n- *Al McGuire*",
    "Как одна неосторожная искра может начать лесной пожар, если я не могу разжечь костер с помощью газовой горелки?",
    "Я не смог отремонтировать тормоза, по этому я сделал клаксон еще громче. \n- *Steven Wright*",
    "Я собираюсь жить вечно, ведь все ахрененно. \n- *Steven Wright*",
    "Я мечтаю о хорошем будующем, где куры смогут перебегать дорогу и не задумываться о чем то.",
    "Мой любимый тренажер в зале, это автомат с чипсами.",
    "Я прихожу в офис позже остальных, для того что бы уйти домой раньше \n- *Charles Lamb*",
    "Просто сделай это. \n- *Shia Labeouf*",
    "Не позволяйте быть вашим мечтам, мечтами. \n- *Shia LaBeouf*",
    "Ракетное топливо не может расплавить мечты. \n- *Barack Obama*",
    "Чувствую всем телом, ты хороший человек. \n- *Pepe*",
    "Мы не делаем больших ошибок, просто бывают маленькие неприятности. \n- *Bob Ross*",
    "Нет ничего плохого в том, что дерево твой друг. \n- *Bob Ross*",
    "Просто коснись... \n- *Bob Ross*"
];

/*===============================================================================*/
/*===============================================================================*/
/*===============================================================================*/
module.exports = Quote;