module.exports = (bot) => {
    bot.start((ctx) => {
      ctx.reply('🎬 Привет! Я бот для рекомендаций фильмов.\n\n' +
                'Используй команды:\n' +
                '/random - случайный фильм\n' +
                '/addmovie - сохранить фильм');
    });
  };