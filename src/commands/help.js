module.exports = (bot) => {
    bot.command('help', (ctx) => {
      ctx.reply('🛠 Доступные команды:\n\n' +
                '/random - Случайный фильм\n' +
                '/addmovie - Сохранить фильм\n' +
                '/help - Справка');
    });
  };