'use strict';

const logger = require(`../../logger`);

module.exports = {
  name: `--help`,
  run() {
    const text = `
    Программа запускает http-сервер и формирует файл с данными для api.
    Гайд:
      server.js <command>
      Команды:
      --version:            выводит номер версии
      --help:               печатает этот текст
      --generate <count>    формирует файл mocks.json
    `;

    logger.note(text);
  }
};
