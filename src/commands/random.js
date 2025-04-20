const { getRandomMovie } = require('../services/tmdb');

module.exports = (bot, supabase) => {
  bot.command("random", async (ctx) => {
    try {
      const movie = await getRandomMovie();

      const message =
        `🎬 *${movie.title}* (${
          movie.release_date?.slice(0, 4) || "Год неизвестен"
        })\n` +
        `⭐ Рейтинг: ${movie.vote_average || "Нет"}\n` +
        `📝 ${movie.overview || "Описание отсутствует"}`;

      const kb = {
        inline_keyboard: [
          [
            {
              text: "💾 Сохранить",
              callback_data: `save_${movie.id}_${movie.title.replace(
                /\|/g,
                ""
              )}`,
            },
          ],
        ],
      };

      await ctx.replyWithMarkdown(message, { reply_markup: kb });
    } catch (err) {
      console.error("Ошибка в /random:", err);
      ctx.reply("❌ Ошибка при загрузке фильма");
    }
  });
};