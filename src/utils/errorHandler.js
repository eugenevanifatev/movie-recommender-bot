module.exports = (err, ctx) => {
    console.error(`⚠️ Ошибка в обработчике ${ctx.updateType}:`, err);
    ctx.reply('❌ Произошла ошибка. Попробуйте позже.');
  };