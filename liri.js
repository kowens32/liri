var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var twitterKeys = require('./keys');
var spotifyKeys = require('./keys');

var stringInput1 = process.argv[2];
var stringInput2 = process.argv[3];
var stringInput3 = process.argv[4];
var movieName = "";

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

    music.search({tpe: 'track', query: stringInput2}, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
    });
}

for (var i = 4; i < stringInput3.length; i++) {
    if ( i > 4 && i <stringInput3.length ) {
        movieName = movieName + "+" + stringInput3[i];
    }

    else {
        movieName += stringInput3[i];
    }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

console.log(queryUrl);

request(queryUrl, function (error, response, body){
    if (!error && response.statusCode === 200) {
        console.log('Release Year: ' + JSON.parse(body).Year);
    }
});
