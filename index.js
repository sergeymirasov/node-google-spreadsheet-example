const chalk = require('chalk');
const dotenv = require('dotenv');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require(`./credentials.json`);

dotenv.config();

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

const main = async () => {
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  console.log(`${chalk.blue('Заголовок:')} ${doc.title}`);
  await doc.updateProperties({ title: 'New Title' });
  console.log(`${chalk.blue('Заголовок:')} ${doc.title}`);
};

main();
