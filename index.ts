import fs from 'fs';

(() => {
  console.log('Start reading...');

  fs.readFile('data.txt', 'utf-8', (error: any, data: any) => {
    if (error) {
      console.error('We found an error: ', error);
      return;
    }
    console.log(data.split('\n'));
  });
})();
