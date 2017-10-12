var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var twitterKeys = require('./keys');

var stringInput1 = process.argv[2];
var stringInput2 = process.argv[3];

switch(stringInput1) {
    case 'my-tweets':
        bird();
        break;
}

function bird () {
    var client = new Twitter({
        consumer_key: twitterKeys.consumer_key,
        consumer_secret: twitterKeys.consumer_secret,
        access_token_key: twitterKeys.access_token_key,
        access_token_secret: twitterKeys.access_token_secret
    });

    var params = {screen_name: 'kimberlyOSX'};
    client.get('statuses/kimberlyOSX_timeline', params, function
        (error, tweets, response) {
        if (!error) {

            console.log(tweets);

        }
    });
}

// var music = new Spotify({
//     id:
// })

