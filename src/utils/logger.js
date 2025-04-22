const { createLogger, transports, format } = require('winston');
const path = require('path');

// Função para gerar timestamp em horário de Brasília
function brasiliaTimestamp() {
  return new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
}

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: brasiliaTimestamp }),
    format.json()
  ),
  transports: [
    new transports.File({
      filename: path.join(__dirname, 'logs', 'error.log'),
      level: 'error',
    }),
    new transports.File({
      filename: path.join(__dirname, 'logs', 'info.log'),
      level: 'info',
    }),
    new transports.Console(), // Para também aparecer no terminal
  ],
});

module.exports = logger;
