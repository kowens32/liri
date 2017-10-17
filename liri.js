var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var twitterKeys = require('./keys').twitter;
var spotifyKeys = require('./keys').spotify;

var stringInput1 = process.argv[2];
var stringInput3 = process.argv[3];


switch(stringInput1) {
    case 'my-tweets':
        bird();
        break;
}

switch(stringInput1) {
    case 'spotify-this-song':
        findSong();
        break;
}

switch(stringInput1) {
    case 'movie-this':
        findMovie();
        break;
}

function bird () {
    console.log(twitterKeys)
    var client = new Twitter(twitterKeys);

    var params = {screen_name: 'kimberlyOSX'};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (tweets) {

            console.log(tweets);

        }
    });
}

function findSong() {
    console.log(spotifyKeys);
    var music = new Spotify(spotifyKeys);

    music.search({type: 'track', query: stringInput3}, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[4]);
    });
}

function findMovie() {

    var queryUrl = "http://www.omdbapi.com/?t=" + stringInput3 + "&y=&plot=short&apikey=40e9cece";
    console.log(stringInput3);


    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('Release Year: ' + JSON.parse(body).Year + ' Title: ' + JSON.parse(body).Title +
                ' IMDB Rating: ' + JSON.parse(body).imdbRating +
                ' Rotten Tomatoes Rating: ' + JSON.parse(body).Ratings[1].Value +
                ' Country: ' + JSON.parse(body).Country + ' Language: ' + JSON.parse(body).Language +
                ' Quick Plot: ' + JSON.parse(body).Plot + ' Actors: ' + JSON.parse(body).Actors);
        }
    });
}