var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require("fs");
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


switch(stringInput1) {
    case 'do-what-it-says':
        command();
        break;
}

function bird () {
    console.log(twitterKeys)
    var client = new Twitter(twitterKeys);

    var params = {screen_name: 'TheEconomist', count: 20};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (tweets) {

            for (i = 0; i < tweets.length; i++) {

                console.log('\n',tweets[i].text, tweets[i].created_at);
            }
        }
    });
}

function findSong() {

    var song = '';

    if (stringInput3 === undefined){
        song = ('The Sign, Ace of Base');
        stringInput3 = song;
    }
    else {

        song = stringInput3
    }
    //
    // for (i = 3; i < stringInput3.length; i++){
    //     if (i > 3 && I < stringInput3.length)
    //     {
    //         song = song + "+" + stringInput3[i];
    //     }
    //
    //     console.log('playing now' + song);
    // }

console.log('what is this' + stringInput3);
    console.log(spotifyKeys);
    var music = new Spotify(spotifyKeys);

    music.search({type: 'track', query: stringInput3,  limit: 1}, function (err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks);
    });
}

function findMovie() {
var movie = '';
if (stringInput3 === undefined){
    movie = ('Mr. Nobody');
    stringInput3 = movie;
}
else {
    movie =stringInput3
}

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

function command () {
 fs.readFile("random.txt", "utf8", function(error, data){
     if (error) {
         return console.log(error);
     }
 console.log(data);
     var dataArr = data.split(",");
     console.log(dataArr);
 });

}