"use strict";

var songDomEl= document.getElementById("outputNav"),        // connects to the DOM ELEMENT "outputNav"
    songInputEl = document.getElementById("songInput"),     // user input (song) saved as variable
    artistInputEl = document.getElementById("artistInput"), // user input (artist) saved as variable
    albumInputEl = document.getElementById("albumInput"),   // user input (album) saved as variable
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
    console.log("** Show me what you got **", songArr[i].artist);
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
  console.log("event", event);
  if (event.target.className === "delButton"){
    event.path[2].removeChild(event.path[1]);
  }
});


////////////////// User INPUT functionality ///////////////////
  // function buildSong(songData) {
  //       `<div class="addToDomEl songInfo">
  //       <button id="deleteButton${i}" class="delButton" type="button" name="delete">remove</button>
  //       <h2 class="songTitle">${songArr[i].title}</h2>
  //       <ul class="songGroup">
  //       <li class="artist">${songArr[i].artist}</li> | 
  //       <li class="album">${songArr[i].album}</li> | 
  //       <li class="genre">${songArr[i].genre}</li>
  //       </ul></div>`;
  // }

// Adds songs to "songArr" 
function addContent(songString) {
  songArr.push(songString);
  buildSong(songString);
}

// Strings together the user input
function buildContent(song, artist, album) {
  var songString = "User added \"" + song + "\" by " + artist + " on the album " + album + ".";
  console.log("~~", songString);
  addContent(songString);
}
// grabs user input (song, artist,album) and sends it to 'buildContent' function as arguement
function userInputValues() {
  var addUserSong = songInputEl.value;
  var AddUserArtist = artistInputEl.value;
  var AddUserAlbum = albumInputEl.value;
  buildContent(addUserSong, AddUserArtist, AddUserAlbum);
}
////////////////// Add EVENT LISTENERS /////////////////////

addButtonEl.addEventListener("click", userInputValues);


  // var listLink = document.getElementById("link-list");
  // var listView = document.getElementById("list-view");

  // listLink.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   addView.classList.add("hidden");

  //   listView.classList.add("visible");
  //   listView.classList.remove("hidden");
  // });

