import nn from 'node-notifier';

const MESSAGE_PRESET = {
  'REST': { title: 'IT\'S REST TIME', message: 'TAKE REST FOR 5 MINUTES' },
  'WORK': { title: 'TIME TO START', message: 'BE CONCENTRATED, DO WHAT YOU HAVE TO DO' },
};
const options = {
  sound: true,
  appID: "pomo-timer",
  timeout: 5,
};

class Notifier {
  constructor() { }

  notify(type) {
    nn.notify({
      ...MESSAGE_PRESET[type],
      ...options,
    });
  }
}

const startRestLoop = (notifier) => {
  setTimeout(() => {
    notifier.notify('REST');
    setInterval(() => {
      notifier.notify('REST');
    }, 1800000);
  }, 1500000);
};

const startWorkLoop = (notifier) => {
  notifier.notify('WORK');
  setInterval(() => {
    notifier.notify('WORK');
  }, 1800000);
};

const bootstrap = () => {
  const notifier = new Notifier();
  startWorkLoop(notifier);
  startRestLoop(notifier);
};

bootstrap();
