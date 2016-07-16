"use strict";

var songDomEl= document.getElementById("outputNav"),        // connects to the DOM ELEMENT "outputNav"
    albumInputEl = document.getElementById("albumInput"),   // user input (album) saved as variable
    artistInputEl = document.getElementById("artistInput"), // user input (artist) saved as variable
    genreInputEl = document.getElementById("genreInput"),     // user input (song) saved as variable
    titleInputEl = document.getElementById("titleInput"),     // user input (song) saved as variable
    addButtonEl = document.getElementById("addButton"),     // our add button element (partaking in hte global listener)
    songArr = [];                                           // collects the song information after JSON parsing


////////////////////// JSON Interactions ///////////////////////
fetch('./songs.json')                                       // alternate way to get json data
  .then(response => response.json())                        // returns JSON success
  .then(parsedResponse => {parsedResponse.songs.forEach((value, indexVal) => {
   songArr.push(value);                                     // pushes parsed JSON data to songArr
   });
  console.log("Our Tunes:",songArr);
  }).catch(executeThisCodeIfXHRFails);                      // kicks an error out if failed

fetch('./songs2.json')
  .then(response => response.json())
  .then(parsedResponse => {parsedResponse.songs.forEach((value, indexVal) => {
   songArr.push(value);
   });
  // console.log("qwerty,",songArr[0].title, "&", songArr[2].artist); // path to inner data (Array - use bracket notation)
   myDisplay();                                             // executes "myDisplay upon success"
  }).catch(executeThisCodeIfXHRFails);

function executeThisCodeIfXHRFails (error) {
  console.log("7 >>> this.responseText FILE FAILS =",error);
}


////////////////////// DOM Interaction ///////////////////////
function myDisplay () {
  for (var i = 0; i < songArr.length; i++) {
    // console.log("** Show me what you got **", songArr[i].artist);
    songDomEl.innerHTML += 
      `<div class="addToDomEl songInfo">
      <button id="deleteButton${i}" class="delButton" type="button" name="delete">remove</button>
      <h2 class="songTitle">${songArr[i].title}</h2>
      <ul class="songGroup">
      <li class="artist">${songArr[i].artist}</li> | 
      <li class="album">${songArr[i].album}</li> | 
      <li class="genre">${songArr[i].genre}</li>
      </ul></div>`;
  }
}


////////////////// add DELETE functionality ///////////////////
document.body.addEventListener("click", function(event) {
  // console.log("event", event);
  if (event.target.className === "delButton"){
    event.path[2].removeChild(event.path[1]);
  }
});


////////////////// User INPUT functionality ///////////////////
// Adds songs to "songArr" 
function addContent(addUserSong) {
  songArr.push(addUserSong);
  console.log("Current songArr:", songArr);
  songDomEl.innerHTML +=       
      `<div class="addToDomEl songInfo">
      <button id="deleteButton${songArr.length -1 }" class="delButton" type="button" name="delete">remove</button>
      <h2 class="songTitle">${songArr.title}</h2>
      <ul class="songGroup">
      <li class="artist">${songArr.artist}</li> | 
      <li class="album">${songArr.album}</li> | 
      <li class="genre">${songArr.genre}</li>
      </ul></div>`;
}

// Strings together the user input
function buildContent(album, artist, genre, title) {
  // var songString = "You added \"" + title + "\" by " + artist + " on the " + genre + " album " + album + ".";
    var addUserSong = {
      title: `${title}`,
      artist: `${artist}`,
      album: `${album}`,
      genre: `${genre}`
    };
  console.log("~~~~~", addUserSong);
  // console.log("buildContent fn songArr", songArr);
  addContent(addUserSong);
}


// Grabs user input (album, artist, genre, title) and sends it to 'buildContent' function as argument
function userInputValues() {
  var addUserAlbum = albumInputEl.value;
  var addUserArtist = artistInputEl.value;
  var addUserGenre = genreInputEl.value;
  var addUserTitle = titleInputEl.value;
  buildContent(addUserAlbum, addUserArtist, addUserGenre, addUserTitle);
}


////////////////// Add EVENT LISTENERS /////////////////////
addButtonEl.addEventListener("click", userInputValues);

//LIST VIEW SHOW/HIDE OTHERS (default is "visible")
var listLink= document.getElementById("list-link");     //the LINK at the top
var listView = document.getElementById("list-view");    //the DIV with all SONG stuff
listLink.addEventListener("click", function(event) {
  event.preventDefault();                               //Cancels the event if it is cancel-able, without stopping further propagation of the event.
  addView.classList.add("hidden");                      //the other DIV with ADD HTML
  profileView.classList.add("hidden");                  //the other DIV with PROFILE HTML

  listView.classList.add("visible");                    //Add class "visible" to listView
  listView.classList.remove("hidden");                  //remove class "hidden" to listView
});


//ADD VIEW SHOW/HIDE OTHERS (default is "hidden")
var addLink = document.getElementById("add-link");      //the LINK at the top
var addView = document.getElementById("add-view");      //the DIV with all ADD stuff
addLink.addEventListener("click", function(event) {
  event.preventDefault();                               //Cancels the event if it is cancel-able, without stopping further propagation of the event.
  listView.classList.add("hidden");                     //the other DIV with LIST HTML
  profileView.classList.add("hidden");                  //the other DIV with PROFILE HTML

  addView.classList.add("visible");                     //Add class "visible" to addView
  addView.classList.remove("hidden");                   //remove class "hidden" to addView
});


//PROFILE VIEW SHOW/HIDE OTHERS (default is "hidden")
var profileLink = document.getElementById("profile-link");  //the LINK at the top
var profileView = document.getElementById("profile-view");  //the DIV with all PROFILE stuff
profileLink.addEventListener("click", function(event) {
  event.preventDefault();                                   //Cancels the event if it is cancel-able, without stopping further propagation of the event.
  listView.classList.add("hidden");                         //the other DIV with LIST HTML
  addView.classList.add("hidden");                          //the other DIV with ADD HTML

  profileView.classList.add("visible");                     //Add class "visible" to profileView
  profileView.classList.remove("hidden");                   //remove class "hidden" to profileView
});

