const fs = require('fs');
const path = require('path');

module.exports = (bot, supabase) => {
  const commandsPath = path.join(__dirname);
  
  fs.readdirSync(commandsPath)
    .filter(file => file.endsWith('.js') && file !== 'index.js')
    .forEach(file => {
      const command = require(path.join(commandsPath, file));
      command(bot, supabase);
    });
};