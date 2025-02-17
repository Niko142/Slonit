function createLogger() {
  let notice = "";
  return {
    log(message) {
      notice = message;
    },
    getLogs() {
      console.log(notice);
    },
  };
}

const logger = createLogger();
logger.log("Переданное сообщение");

logger.getLogs();

function createRandomGenerator(min, max) {
  return function () {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}

const randomNumber = createRandomGenerator(10, 20);
console.log(randomNumber());
console.log(randomNumber());
