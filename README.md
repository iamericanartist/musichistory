# NEED TO FINISH

* MH6 - filters working
* MH6 - field for every key (artist, album, title, genre, length)
* MH7 - Bootstrap
* MH8 - firebase is linked <!-- only getting to conlog though -->
* MH8 - all essentially...
* MH9 - Oh my...
* MH10 - partially done? To finish?



***
# Music History 10

## Requirements

### Using Firebase references

In the [Firebase Setup](https://firebase.google.com/docs/web/setup#add_firebase_to_your_app) there are instructions on how to get CDN and app setup information for your Firebase app. After clicking 'Add Firebase to your web app' on your project's Firebase main page, copy the CDN link into your HTML, and copy the JavaScript snippet into your JavaScript to initialize your app.

```js
var config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com"
};

firebase.initializeApp(config);
```

Then, in your JavaScript, you can create what's called a Firebase Reference.

```js
var myFirebaseRef = firebase.database().ref();
```

You will use this reference for authentication

### Authentication

For this exercise, you are going to force users to log in before they can use Music History.

> [Firebase docs](https://firebase.google.com/docs/auth/web/password-auth) for username and password authentication.

1. When the user first opens the application, there should be a username and password text field, a button labeled "Register", and a button labeled "Login".
1. If the user has filled in information in both text fields, and clicks the register button, you are going to [create an account in Firebase](https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account) for that user.
1. If the user has filled in information in both text fields, and clicks the register button, you are going to [authenticate](https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password) that user.
1. In the navigation bar, add a "Log out" link or button.
1. When the user clicks on the logout element, you will [unauthenticate](https://firebase.google.com/docs/auth/web/password-auth#next_steps) the user.
1. When a user has been successfully authenticated, you can listen to that change of state with the [onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user) method.
1. When you have authenticated a user, show the music filtering view.
1. When the user has been unauthenticated, show the login view again.


***
# Music History 9

## Requirements

Refactor Music History, or choose to rebuild from scratch (whichever you deem most effecient), using Angular.


***
# Music History 8

## Requirements

1. Use jQuery to retrieve the songs from your Firebase API.
1. Use jQuery to add new songs to your Firebase API with POST XHR calls.
1. Populate the form fields with data from your API.
1. When "Filter" button is pressed, update the song list with songs that only match the specified criteria.

Example:

```js
var filteredSongs = { songs: { } };

for (var key in existingSongObjectFromFirebase.songs) {
    var currentSong = existingSongObjectFromFirebase.songs[key];

    // Check if the currentSong.artist key value matches what the user selected
    // If it does, add the current song to the `filteredSongs.song` object
}

// Update the DOM with the filtered songs object
```

## Post promises requirements

These requirements only apply after we cover promises in class.

1. When you add, or delete, a song, the modules that perform the XHRs should return promises.
1. After the promise is resolved, you should display a [Bootstrap modal](http://getbootstrap.com/javascript/#modals) window to provide feedback on if the operation was successful, or not.


***
# Music History 7

## Requirements
## Using SASS

All your current CSS should be converted into SASS, and you must use SASS from this point forward.

## Using Automation

As you are working, ensure that your Gulp/Grunt task is running at all times so that your JavaScript code is automatically checked as you're writing it, and your SASS is compiled into CSS.

> **Note:** After you run your Gulp/Grunt task, if you add more JavaScript files, you need to restart grunt so that it recognizes the new file you added.

## Using Bootstrap

You need to have your application refactored to use the Bootstrap grid system for layout. From this point on, styling of your application is completely up to you, but you must be using Bootstrap grid system for layouts.


***
# Music History Part 6

## Instructions

Now is the time to make Music History a fully functional, single page, modular, asychronous, application.

### Modular with Browserify

1. Using Browerify, you should create several modules for the application.
1. One module is responsible for loading songs from a JSON file and storing them in an array. This module should expose one method for getting the entire list of songs, and one method for adding a song to the array.
1. One module is responsible for making the filtering form work. Therefore, it will need to use methods from the previous module.
1. One module is responsible for showing the two views of the app (song list and song form).

### Filtering

1. When the user selects an artist, only songs from that artist should appear.
1. When the user selects an album, only songs from that album should appear.

### Adding Songs

1. The new music form should have a field for every key on a song object. We started with just Artist, Album, and Title, but you can add more if you wish.
1. The music form should be fully functional. When you click the *Save Song* button, a new object should be added to the array of songs. The DOM should also be immediately updated with the new song added.



***
# Music History Part 5

## Instructions

This one's simple.

Implement jQuery in your Music History code. Every `innerHTML`, `getElementById`, `getElementByClassName`, event listener and XHR request. Convert 'em all.



***
# Music History Part 4

## Instructions
### Part One

1. Read from local JSON file with an XHR.
1. Loop over results and inject into Music History list view.
1. Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.

### Part Two

1. Take your music and split it into two JSON file instead of them all living on one file.
1. Add a button at the bottom of your music list and label it "More >".
1. Load the songs from the first list and inject the DOM into the document as you've already done.
1. When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.



***
# Music History Part 3

## Instructions

Time to make Music History into a single page application. Before you begin please [review the sample code](https://github.com/nashville-software-school/front-end-milestones/blob/master/3-single-page-applications/resources/SP_JS_SINGLE_PAGE_APPLICATIONS.md) I provided in JavaScript 103 about building a simple SPA.

1. In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
1. Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a `<form>` element because we're not actually submitting this form anywhere.
1. Add a `<button>` element at the bottom of the input fields labeled "Add".
1. The input fields and the add button make up the *Add Music View*.
1. The existing view - the combination of the filter form and the song list - will be referred to as the *List Music View*.
1. The *Add Music View* should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
1. When the user clicks on "Add Music" in the navigation bar, the *List Music View* should be hidden, and the *Add Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a0cf17f7b)).
1. When the user clicks on "List Music" in the navigation bar, the *Add Music View* should be hidden, and the *List Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a8d99d401)).
1. Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.



***
# Music History Part 2

![Music History 1/2](/images/musicHistory1-2.png?raw=true "Music History 1/2 Screenshot")

## Requirements

Use JavaScript arrays, loops, and innerHTML to show the music you love.

Students must use JavaScript to create a list of songs in the `index.html` file for their Music History project. Have them download the [`songs.js`](https://raw.githubusercontent.com/nashville-software-school/front-end-curriculum/9f5d7303f4c53102e8918f0ca06bebc84c91d266/resources/js-101.js) file, which contains an array of strings with song information.

1. Each student must add one song to the beginning and the end of the array.
1. Loop over the array and remove any words or characters that obviously don't belong.
1. Students must find and replace the `>` character in each item with a `-` character.
1. Must add each string to the DOM in `index.html` in the main content area.

 ------------------------------------------------
|  {Song name} by {Artist} on the album {Album}  |
 ------------------------------------------------

## Merging your branch

After you've got all of the requirements completed, follow these steps.

1. In your `musichistory` directory, enter the command `git checkout master`. This switches you back to the master branch.
1. `git merge -X theirs version2`
1. If you see a vim screen with a default message in it just `:x` to save and exit.

Your branch is now merged into the master branch and you can push the master branch up to Github with `git push origin master`.



***
# Music History

This is the project that you will be working for your individual work throughout the entire front end course. Don't worry, you'll be building lots of other applications, but when you learn a new technique, library or language, you'll be cutting your teeth with it on Music History.

I've started you off with a very basic HTML document, the `index.html` file. This file name is the default file that most any web server looks for in the directory in which is was started. This is why you don't have to type in `www.google.com/index.html`. If the file exists, the web server sends it back to you if you just request the root URL.

> **Terminology:** Root URL simply means your domain name (or IP address) with no other documents, or folders specified. `www.google.com` is the root URL of Google's web site, but `www.google.com/finance` is not.

## Your first Fork & Clone

You're going to get a copy of this Github repository downloaded - a.k.a. cloned - to your machine using the `git` command. Here's how to do it.

1. Look all the way up and to the right of this screen and you'll see a button with the word **Fork** on it. Click that button,
2. What you've just done is taken a copy of *my* repository and all the code inside it, and copied into your Github account. You can now do whatever you like to your fork of my repository and it won't affect mine at all.
3. Now on the top of the page, you will see the text **HTTPS** with a text box next to it. Make sure that HTTPS is selected.
4. Click the little clipboard icon to the right and it copies that URL to your computer's clipboard.
5. Open your terminal window and navigate to your workspace folder.
6. Type in `git clone ` and then paste the URL after that text. You should see
   `git clone https://github.com/{your account name here}/musichistory-boilerplate.git musichistory`
1. Hit your enter key and git will do two things. First, it creates a `musichistory` sub-directory under `/workspace` and then downloads all the code into that directory.
1. Now `ls musichistory`.
1. You will see the lonely `index.html` file sitting in there.

Congratulations, you've just cloned your first Github repository!

Now here's your assignment.

## Individual Assignment

You will be building the basic structure of your Music History application in HTML and making it look good with the skills you learned in CSS.

Visit the [Music History mockup](https://moqups.com/chortlehoort/1E8LJX7r/) that I created. You will be recreating that document in your own HTML file.

### Criteria 

1. Create five options for the artist select element of any artist that you enjoy.
1. Create at least five options for the album select element. One, or more, album for each artist.
1. The links in the navigation bar don't need to link to anything just yet, you can use `<a href="#">View music</a>` for now
1. Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side. You can use `h1` tags, `div` tags, `section` tags... whatever you like.

## Completing

Once you are done, make sure you add your files to git, make a commit, and then push your new code up to Github with the following command `git push origin master`.