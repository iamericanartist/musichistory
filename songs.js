
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
  //WUT
  songDomEl.innerHTML += `<div class="addToDomEl">${songs[i]}</div>`;
  console.log(songs[i]); //console.log shows each iteration [i] through the loop as strings
}

console.log("...current number of songs =", songs.length);
console.log("...current songs in ARRAY =", songs);

