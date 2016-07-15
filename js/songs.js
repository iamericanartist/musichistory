"use strict";

var songDomEl= document.getElementById("outputNav");    // connects to the DOM ELEMENT "outputNav"
var songArr = [];                                       // collects the song information after JSON parsing


////////////////////// JSON Interactions ///////////////////////
fetch('./songs.json')
  .then(response => response.json())
  .then(parsedResponse => {parsedResponse.songs.forEach((value, indexVal) => {
   songArr.push(value);
   });
  console.log("asdf",songArr);
  }).catch(executeThisCodeIfXHRFails);

fetch('./songs2.json')
  .then(response => response.json())
  .then(parsedResponse => {parsedResponse.songs.forEach((value, indexVal) => {
   songArr.push(value);
   });
  // console.log("qwerty",songArr[0].title, songArr[2].artist); // path to inner data (Array - use bracket notation)
   myDisplay();
  }).catch(executeThisCodeIfXHRFails);

function executeThisCodeIfXHRFails (error) {
  console.log("7 >>> this.responseText FILE FAILS =",error);
}


////////////////////// DOM Interaction ///////////////////////
function myDisplay () {
  // console.log("8 This is now useable!!!!!!!", JSONParsed);
  for (var i = 0; i < songArr.length; i++) {
    // console.log("9 Show me what you got", songArr[i].artist);
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

