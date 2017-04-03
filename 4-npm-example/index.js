const request = require('request-promise');

const ACCESS_TOKEN = 'b1e92bcda1267054cd237a974615977d0ea34051';
const REQUEST_URL = 'https://api.github.com/user/repos';

const printRepository = (repository) => {
  console.log(repository.full_name);
};

const options = {
  uri: REQUEST_URL,

  qs: {
    access_token: ACCESS_TOKEN,
    // sort: 'updated',
  },

  headers: {
    'User-Agent': 'Request-Promise',
  },

  json: true,
};

request(options)
  .then((data) => {
    data.forEach(printRepository);
  })
  .catch(error => console.log(error));
