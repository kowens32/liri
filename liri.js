var Twitter = require('twitter');
var twitterKeys = require('./keys');

for ( var key in twitterKeys) {
    https://api.twitter.com/oauth2/token
        https://api.twitter.com/oauth/request_token
             https://api.twitter.com/oauth/authorize
    https://api.twitter.com/oauth/access_token

}

var client = new Twitter ({
    consumer_key: process.env.Twitter_consumer_key,
    consumer_secret: process.env.Twitter_consumer_secret ,
    access_token_key: process.env.Twitter_access_token_key,
    access_token_secret: process.env.Twitter_access_token_secret,
});
