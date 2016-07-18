"use strict";

const $ = require('jquery');    // "./"" if in same folder,  "../"" if in outer
const db = require('./db-interaction');


const retrieveData = (data) => {
  $.each(data, function(key, val){
    console.log("data", key, val);
  });
};
db.getSongs(retrieveData);

var $songDomEl = $("#outputNav"),           // connects to the DOM ELEMENT "outputNav"
    $albumInputEl = $("#albumInput"),       // user input (album) saved as variable
    $artistInputEl = $("#artistInput"),     // user input (artist) saved as variable
    $genreInputEl = $("#genreInput"),       // user input (song) saved as variable
    $titleInputEl = $("#titleInput"),       // user input (song) saved as variable
    $addButtonEl = $("#addButton"),         // our add button element (partaking in hte global listener)
    $addPrintEl = $("#addingEl"),           // our add button element (partaking in hte global listener)
    songArr = [];                           // collects the song information after JSON parsing


////////////////////// JSON Interactions ///////////////////////
fetch('./songs.json')                       // alternate way to get json data
  .then(response => response.json())        // returns JSON success for 1st JSON
  .then(parsedResponse => {parsedResponse.songs.forEach((value, indexVal) => {
   songArr.push(value);                     // pushes parsed JSON data to songArr
   });
  console.log("Our Tunes:",songArr);
  }).catch(executeThisCodeIfXHRFails);      // kicks an error out if failed

fetch('./songs2.json')
  .then(response => response.json())        // returns JSON success for 2nd JSON
  .then(parsedResponse => {parsedResponse.songs.forEach((value, indexVal) => {
   songArr.push(value);                     // pushes parsed JSON data to songArr
   });
  // console.log("qwerty,",songArr[0].title, "&", songArr[2].artist); // path to inner data (Array - use bracket notation)
   myDisplay();                             // executes "myDisplay upon success"
  }).catch(executeThisCodeIfXHRFails);      // kicks an error out if failed

function executeThisCodeIfXHRFails (error) {          // error function
  console.log("7 >>> this.responseText FILE FAILS =",error);
}



////////////////////// DOM Interaction ///////////////////////
function myDisplay() {
  let songString = "";                    // initiates empty string to fill below
  $.each(songArr, function(ind, val){     // JQuery "for each" loop (for each item in "songArr", reference "index", and assign "value" )
    // console.log("val", val);
    songString += 
      `<div class="addToDomEl songInfo">
      <button id="deleteButton${ind}" class="delButton" type="button" name="delete">remove</button>
      <h2 class="songTitle">${val.title}</h2>
      <ul class="songGroup">
      <li class="artist">${val.artist}</li> | 
      <li class="album">${val.album}</li> | 
      <li class="genre">${val.genre}</li>
      </ul></div>`;
  });
  $songDomEl.append(songString);          // in the "songDomEl", "append" with the current iteration(similar to [i]) of "songString"
}



////////////////// add DELETE functionality ///////////////////
$(document).on( "click", ".delButton",function(event){    // listens for "click" on ".delButton"
  $(this).parent().remove();                              // removes parent element of clicked ".delButton"
});



////////////////// User INPUT functionality ///////////////////
function addContent(addUserSong) {                        // Adds songs to "songArr"
  songArr.push(addUserSong);    
  let addHtmlString = "";
  addHtmlString  =
  `<div class="addToDomEl songInfo">
      <button id="deleteButton${songArr.length -1 }" class="delButton" type="button" name="delete">remove</button>
      <h2 class="songTitle">${addUserSong.title}</h2>
      <ul class="songGroup">
      <li class="artist">${addUserSong.artist}</li> | 
      <li class="album">${addUserSong.album}</li> | 
      <li class="genre">${addUserSong.genre}</li>
      </ul></div>`;
  $songDomEl.append(addHtmlString);
}

const buildContent = (album, artist, genre, title)=> {    // Strings together the user input
  let addUserSong = {
    title: title,
    artist: artist,
    album: album,
    genre: genre
  };
  $addPrintEl.html(`You added "${title}" by ${artist} on the ${genre} album ${album}.`);
  console.log("You added \"" + title + "\" by " + artist + " on the " + genre + " album " + album + ".");
  addContent(addUserSong);
};

const userInputValues = ()=> {                            // Grabs user input (album, artist, genre, title) and sends it to 'buildContent' function as argument 
 buildContent($albumInputEl.val(), $artistInputEl.val(), $genreInputEl.val(), $titleInputEl.val());
};



////////////////// Add EVENT LISTENERS /////////////////////
$addButtonEl.on("click", userInputValues);

//LIST-VIEW SHOW/HIDE OTHERS
$("#list-link").on("click", function(){         // event listener for #list-link in HTML
  $("#add-view").hide();                        // hide DIV with ADD-VIEW HTML
  $("#profile-view").hide();                    // hide DIV with PROFILE-VIEW HTML
  $("#list-view").show();                       // show DIV with LIST-VIEW HTML
});

// ADD-VIEW SHOW/HIDE OTHERS
$("#add-link").on("click", function(){          // event listener for #add-link in HTML
  $("#profile-view").hide();                    // hide DIV with PROFILE-VIEW HTML
  $("#list-view").hide();                       // hide DIV with LIST-VIEW HTML
  $("#add-view").show();                        // show DIV with ADD-VIEW HTML
});

// PROFILE-VIEW SHOW/HIDE OTHERS 
$("#profile-link").on("click", function(){      // event listener for #add-link in HTML
  $("#list-view").hide();                       // hide DIV with LIST-VIEW HTML
  $("#add-view").hide();                        // hide DIV with ADD-VIEW HTML
  $("#profile-view").show();                    // show DIV with PROFILE-VIEW HTML
});
