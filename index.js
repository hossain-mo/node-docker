require('dotenv').config();

const app = require('./src/app');

const { appPort } = require('./config/app-config');

const boot = () => {
  app.listen(vvvvc appPort, () => {
    console.log(`server running on port ${appPort}`);
  });
};

boot();
