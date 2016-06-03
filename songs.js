
//define empty "songs" array, and ADD songs with "songs[songs.length] below"
var songDomEl= document.getElementById("yellowNav");

var songs = [];
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// console.log(">>> Initial number of songs =", songs.length); 
// console.log(">>> Initial songs in list =", songs);

// Add to the array: unshift to front of list & push to end of list
	// Remove from array: shift from front of list & pop from end of list
songs.unshift("Ego Trip > by De La Soul on the album Buhloone Mindstate");
songs.push("Blue Boy > by Mac Demarco on the album Salad Days");

//for loop to clean up the random characters in the initial array: 
	//.replace(/~/g, "?") replaces before comma (/~/globally here) with after comma... 
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/>/g, "-").replace(/\*/g, "").replace(/@/g, "").replace(/\(/g, "").replace(/!/g, "");
  songDomEl.innerHTML += `<div class="addToDomEl">${songs[i]}</div>`;
  console.log(songs[i]); //console.log shows each iteration [i] through the loop as strings (each song/artist/album)
}
// // Console logs for object item
// console.log("...current number of songs =", songs.length);
// console.log("...current songs in ARRAY =", songs);

////////////////////// JSON Interactions ///////////////////////

function executeThisCodeAfterFileIsLoaded () {
  console.log(">>> this.responseText FILE IS LOADED =", this.responseText);
  // console.log("event.target.responseText (aka) 'this' is =", event.target.responseText);   //returns same as "myRequest" above

  var JSONedArray = JSON.parse(this.responseText);  //JSON.parse() here to get a POJO (Plain Old JavaScript Object)
  console.log(">>> JSON.parse for this.responseText FILE IS LOADED =", JSONedArray);
  // console.log(">>> JSON.parse for this.responseText FILE IS LOADED =", this.responseText);
console.log("testing (Orig songs array, specified item) >>>>>> ",songs[2]);	 //from original array
console.log("testing (new array ALL DATA) >>>>>> ",JSONedArray); 	//ALL DATA returns from JSONedArray array
console.log("testing (new array objects in array) >>>>>> ",JSONedArray.songs[2]); 	//entire object (keys and values) return from JSONedArray array 
console.log("testing (new array items in array) >>>>>> ",JSONedArray.songs[2].title); 	//for specific key values return from JSONedArray array 



}

function executeThisCodeIfXHRFails () {
	console.log(">>> this.responseText FILE FAILS =", this.responseText);
}


var myRequest = new XMLHttpRequest();  // Creating the XHR object here
myRequest.open("GET", "songs.json");  // Telling the XHR object exactly what to do (could be "GET","POST","PUT","DELETE"), and "where to go"
myRequest.send();  // Tell the XHR object to start
// console.log("myRequest response is: ",myRequest); // to "see" everything regarding myRequest
// console.log("myRequest.readyState response is >>>",myRequest.readyState); // to "see" value of myRequest.readyState 

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);




