"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let firebase = require("./firebaseConfig"),
    fb = require("./fb-getter"),
    $ = require("jquery"),
    fbData = fb();

// ****************************************
// DB interaction using Firebase SDK
// ****************************************

function getSongs(callback) {
  firebase.database().ref("songs").on("value", function(songData){
    console.log("Sumthin happen");
    callback(songData.val());
  });
}

function addSong(newSong) {
  return firebase.database().ref("songs").push(newSong); //push here is returning promise
}

// remove once update
function deleteSong(songId) {
  console.log("Remove succeeded.");
  return firebase.database().ref(`songs/${songId}`).remove();
}

function getSong(songId) {
  return firebase.database().ref(`songs/${songId}`).once('value');
}

function editSong(songFormObj, songId) {
  return firebase.database().ref(`songs/${songId}`).update(songFormObj);
}

module.exports = {
  getSongs,
  addSong,
  getSong,
  deleteSong,
  editSong
};