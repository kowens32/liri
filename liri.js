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
    var client = new Twitter(twitterKeys);

    var params = {screen_name: 'kimberlyOSX'};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (tweets) {

            console.log(tweets[1].created_at);
            tweets.for

        }
    });
}

// var music = new Spotify({
//     id:
// })

