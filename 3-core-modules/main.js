const os = require('os');
const fs = require('fs');

const userInfo = os.userInfo();
const { username } = userInfo;

const logString = `${username} run script at ${new Date()}\n`;

fs.appendFile('access.log', logString, (error, data) => {
  if (error) {
    console.log(`Error while appending a file: ${error}`);
  } else {
    console.log('Logging finished!');
  }
});

// fs.appendFileSync('access.log', logString);

console.log('Script finished');
