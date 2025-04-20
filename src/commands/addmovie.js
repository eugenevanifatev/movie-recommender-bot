module.exports = (bot, supabase) => {
  bot.action(/^save_(\d+)_(.+)$/, async (ctx) => {
    const [movieId, title] = ctx.match.slice(1);

    try {
      const { error } = await supabase.from("watched_movies").insert([
        {
          user_id: ctx.from.id,
          movie_id: movieId,
          title,
        },
      ]);

      if (error) throw error;
      await ctx.answerCbQuery(`✅ "${title}" сохранен!`);
    } catch (err) {
      await ctx.answerCbQuery("❌ Ошибка сохранения");
      console.error("Ошибка сохранения:", err);
    }
  });
};