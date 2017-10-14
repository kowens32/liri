var Twitter = require('twitter');
var Spotify = require('spotify');
var twitterKeys = require('./keys');
var spotifyKeys = require('./keys');

var stringInput1 = process.argv[2];
var stringInput2 = process.argv[3];

switch(stringInput1) {
    case 'my-tweets':
        bird();
        break;
}

switch (stringInput2){
    case 'spotify-this-song':
        findSong();
        break;
}

function bird () {
    var client = new Twitter(twitterKeys);

    var params = {screen_name: 'kimberlyOSX'};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (tweets) {

            console.log(tweets[1].length);
            tweets.for

        }
    });
}

function findSong () {
    var music = new Spotify(spotifyKeys)

    Spotify.search({tpe: 'track', query: stringInput2}, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
    });
}