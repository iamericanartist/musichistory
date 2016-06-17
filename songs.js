
//define empty "songs" array, and ADD songs with "songs[songs.length] below"
var songDomEl= document.getElementById("outputNav");

// var songs = [];
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// // console.log(">>> Initial number of songs =", songs.length); 
// // console.log(">>> Initial songs in list =", songs);

// // Add to the array: unshift to front of list & push to end of list
// 	// Remove from array: shift from front of list & pop from end of list
// songs.unshift("Ego Trip > by De La Soul on the album Buhloone Mindstate");
// songs.push("Blue Boy > by Mac Demarco on the album Salad Days");

// //for loop to clean up the random characters in the initial array: 
// 	//.replace(/~/g, "?") replaces before comma (/~/globally here) with after comma... 
// for (var i = 0; i < songs.length; i++) {
// 	songs[i] = songs[i].replace(/>/g, "-").replace(/\*/g, "").replace(/@/g, "").replace(/\(/g, "").replace(/!/g, "");
//   songDomEl.innerHTML += `<div class="addToDomEl">${songs[i]}</div>`;
//   console.log(songs[i]); //console.log shows each iteration [i] through the loop as strings (each song/artist/album)
// }
// // // Console logs for object item
// // console.log("...current number of songs =", songs.length);
// // console.log("...current songs in ARRAY =", songs);


////////////////////// JSON Interactions ///////////////////////
var JSONParsed;

function executeThisCodeAfterFileIsLoaded () {
  console.log("0 Successful File Load =", this.responseText); //ALL DATA returns from JSONParsed AS JSON OBJECT
  // console.log("event.target.responseText (aka) 'this' is =", event.target.responseText);   //returns same as "myRequest" above
  

          // //////////Added in class!///////////////
          // ///// All inside the function!!!! /////
          // console.log("0A event.target",event.target); //has readystate "4"
          // var data = JSONParse(event.target.responseText);
          // console.log("data", data );

          // for (currentSong in data.songs) {
          //   var songData = "";
          //   var song = data.songs[currentSong]
          //   songData += <div class="song-block>";
          //   songData += `<h1>${song.title}</h1>`;
          //   songData += 
          // }



          // //////////Added in class!///////////////


  JSONParsed = JSON.parse(this.responseText);  //JSON.parse() here to get a POJO (Plain Old JavaScript Object)

// //These were just for discovery (duplicated below more than likely)  
//   console.log("1 JSON.parse for JSONParsed =", JSONParsed);  //ALL DATA returns from JSONParsed AS ARRAY 
//   console.log("2 JSON.parse for this.responseText =", this.responseText); //ALL DATA returns from JSONParsed AS JSON OBJECT
//   console.log("3 testing (Orig songs array, specified item) >>>>>> ",songs[2]);	 //from original array

  // console.log("4 testing (new array ALL DATA) >>>>>> ",JSONParsed); 	//ALL DATA returns from JSONParsed AS ARRAY
  // console.log("5 testing (new array objects in array) >>>>>> ",JSONParsed.songs[2]); 	//entire object (keys and values) return from JSONParsed array 
  // console.log("6 testing (new array items in array) >>>>>> ",JSONParsed.songs[2].title); 	//for specific key values return from JSONParsed array 
  myDisplay();
  return JSONParsed;
}
function executeThisCodeIfXHRFails () {
	console.log("7 >>> this.responseText FILE FAILS =", this.responseText);
}

function myDisplay () {
  console.log("8 This is now useable!!!!!!!", JSONParsed);
  for (var i = 0; i < JSONParsed.songs.length; i++) {
    // console.log("9 Gimme SOMETHING>>>>>>>>>>>", JSONParsed.songs[i].artist);
    songDomEl.innerHTML += 
      `<div class="addToDomEl songInfo">
      <button id="deleteButton${i}" class="delButton" type="button" name="delete">remove</button>
      <h2 class="songTitle">${JSONParsed.songs[i].title}</h2>
      <ul class="songGroup">
      <li class="artist">${JSONParsed.songs[i].artist}</li> | 
      <li class="album">${JSONParsed.songs[i].album}</li> | 
      <li class="genre">${JSONParsed.songs[i].genre}</li>
      </ul></div>`

  }
  document.getElementById("deleteButton(i)").addEventListener("click", function(event) {
    console.log("event", event);
    // songDomEl.innerHTML += `${event.target.innerHTML}`
  });
}


var myRequest = new XMLHttpRequest();  // Creating the XHR object here
myRequest.open("GET", "songs.json");  // Telling the XHR object exactly what to do (could be "GET","POST","PUT","DELETE"), and "where to go"
myRequest.send();  // Tell the XHR object to start
// console.log("myRequest response is: ",myRequest); // to "see" everything regarding myRequest
// console.log("myRequest.readyState response is >>>",myRequest.readyState); // to "see" value of myRequest.readyState 

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
