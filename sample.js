const Client = require('twitter.js').Client
const bearerToken = 'AAAAAAAAAAAAAAAAAAAAALMebgEAAAAAw%2FtF%2FSr8o69FEy%2BisTpIVUZvOwI%3DSyCUK20BepFLe6KWMrrk5sAvRXQ4yLgoc73NmVzB6bSnBbjufx';
const client = new Client();
client.loginWithBearerToken(bearerToken);

const username = 'nijinmuhammed';

client.users.fetchByUsername(username).then((user) => {
  console.log(user);
});