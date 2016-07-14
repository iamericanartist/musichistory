
var songDomEl= document.getElementById("outputNav");

////////////////////// JSON Interactions ///////////////////////
var JSONParsed;

function executeThisCodeAfterFileIsLoaded () {
  // console.log("0 Successful File Load =", this.responseText); //ALL DATA returns from JSONParsed AS JSON OBJECT
  // console.log("event.target.responseText (aka) 'this' is =", event.target.responseText);   //returns same as "myRequest" above
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
    // console.log("9 Show me what you got", JSONParsed.songs[i].artist);
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
  // document.getElementById("deleteButton(i)").addEventListener("click", function(event) {
  //   console.log("event", event);
  //   // songDomEl.innerHTML += `${event.target.innerHTML}`
  // });
}

var myRequest = new XMLHttpRequest();  // Creating the XHR object here
myRequest.open("GET", "songs.json");  // Telling the XHR object exactly what to do (could be "GET","POST","PUT","DELETE"), and "where to go"
myRequest.send();  // Tell the XHR object to start
// console.log("myRequest response is: ",myRequest); // to "see" everything regarding myRequest
// console.log("myRequest.readyState response is >>>",myRequest.readyState); // to "see" value of myRequest.readyState 

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
