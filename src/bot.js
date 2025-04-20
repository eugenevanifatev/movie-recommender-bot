const { Telegraf } = require('telegraf');
const config = require('./config');
const supabase = require('./services/supabase');
const errorHandler = require('./utils/errorHandler');

const bot = new Telegraf(config.TELEGRAM_BOT_TOKEN);

// Автоподгрузка всех команд
require('./commands')(bot, supabase);

// Глобальный обработчик ошибок
bot.catch(errorHandler);

// Запуск
bot.launch()
  .then(() => console.log('🤖 Бот запущен!'))
  .catch(err => console.error('🚨 Ошибка запуска:', err));

// Обработка завершения
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));