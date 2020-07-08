'use strict';

/*
Goal is to ask the user 5 yes/no questions and respond to the user with alerts
that are responsive to the user input.
Secondary goal is to make a responsive list that displays the information the user requested.

5 questions:
What's the user's name?
Would the user like to know where I'm from?
Would the user like to know about my education?
Would the user like to know where I worked?
Would the user like to know about my hobbies?
Would the user like to know about my pet?

They don't really have a choice on that last one,
I'm going to serve them my cat image...

The responses to the questions will be along the lines of
'Thanks for showing interest, I'll add that to the page.'
'It's ok, maybe there's something else that would interest you?'
*/

var userName = prompt('Welcome to a page about the author of the page. First, what\'s your name?');
var welcomeMessage = 'Welcome, ' + userName + '! I just have a few questions to make sure you get the information you want.';

// console.log(welcomeMessage);
alert(welcomeMessage);


// saving a message to serve the user in case their responses weren't valid
var failedAnswerMessage = 'I\'m sorry, I didn\'t understand. Make sure to answer "y" for yes or "n" for no. I\'ll assume that was a yes and move on.';


// found how to use .toLowerCase() here: https://www.w3schools.com/jsref/jsref_tolowercase.asp
var userInterestedInBackground = prompt('Would you like to know about where I\'m from? (y/n)').toLowerCase();

var backgroundMessage;
if (userInterestedInBackground === 'y') {
  backgroundMessage = 'Thanks for your interest. I\'ll add that to the page.';
} else if (userInterestedInBackground === 'n') {
  backgroundMessage = 'That\'s fine, let\'s see if there\'s something else you would like to know.';
} else {
  backgroundMessage = failedAnswerMessage;
}

// console.log(backgroundMessage);
alert(backgroundMessage);



var userInterestedInEducation = prompt('Would you like to know about my education? (y/n)').toLowerCase();

var educationMessage;
if (userInterestedInEducation === 'y') {
  educationMessage = 'Great! Coming right up.';
} else if (userInterestedInEducation === 'n') {
  educationMessage = 'You know, maybe that\'s for the best. Hmmm, what\'s next...';
} else {
  educationMessage = failedAnswerMessage;
}

// console.log(educationMessage);
alert(educationMessage);



var userInterestedInWorkHistory = prompt('Would you like to know about my work history? (y/n)').toLowerCase();

var workHistoryMessage;
if (userInterestedInWorkHistory === 'y') {
  workHistoryMessage = 'I\'m flattered. Let me see what I can put together for you';
} else if (userInterestedInWorkHistory === 'n') {
  workHistoryMessage = 'No problem, moving on...';
} else {
  workHistoryMessage = failedAnswerMessage;
}

// console.log(workHistoryMessage);
alert(workHistoryMessage);



var userInterestedInHobbies = prompt('Would you like to know about my personal hobbies? (y/n)').toLowerCase();

var hobbiesMessage;
if (userInterestedInHobbies === 'y') {
  hobbiesMessage = 'Cool, I\'m excited to share my interests with you!';
} else if (userInterestedInHobbies === 'n') {
  hobbiesMessage = 'Sure, let\'s keep it simple.';
} else {
  hobbiesMessage = failedAnswerMessage;
}

// console.log(hobbiesMessage);
alert(hobbiesMessage);



var userInterestedInPet = prompt('Would you like to know about my pet cat? (y/n)').toLowerCase();

// adding a possibility that the user did not want to see anything
// true only if they answered 'n' to everything'
// used this thread as a guide for formatting, though it is geared towards Java,
// I thought it looked good:  https://stackoverflow.com/questions/12791614/code-formatting-dealing-with-long-invocations-operations-and-boolean-logic
var badSport = (
  userInterestedInBackground === 'n' &&
  userInterestedInEducation === 'n' &&
  userInterestedInWorkHistory === 'n' &&
  userInterestedInHobbies === 'n' &&
  userInterestedInPet === 'n'
);
// console.log(badSport);

var petMessage;
if (badSport) {
  petMessage = 'You know what, ' + userName + '? You\'ve answered no to everything. I\'m just going to give you all the info and leave you to it. Jeez, some people...';
} else if (userInterestedInPet === 'y') {
  petMessage = userName + ', you just made my day.';
} else if (userInterestedInPet === 'n') {
  petMessage = 'Well, ' + userName + ', I\'m showing you a picture of my cat anyways.';
} else {
  petMessage = failedAnswerMessage;
}

// console.log(petMessage);
alert(petMessage);



// declaring a function to takes a user response and decides whether
// to make a corresponding element visible

// used https://www.w3schools.com/js/js_functions.asp as function format reference
// and https://www.w3schools.com/jsref/prop_style_visibility.asp to understand changing the style property
function hideElementIfUserDesires(userResponse, elId) {
  if (userResponse === 'n') {
    var elToHide = document.getElementById(elId);
    elToHide.style.display = 'none';
  }
}

// if the user is a badSport, they'll get everything
// otherwise the list items 
if (!badSport) {
  hideElementIfUserDesires(userInterestedInBackground, 'background');
  hideElementIfUserDesires(userInterestedInEducation, 'education');
  hideElementIfUserDesires(userInterestedInWorkHistory, 'work-history');
  hideElementIfUserDesires(userInterestedInHobbies, 'hobbies');
  hideElementIfUserDesires(userInterestedInPet, 'pet');
}







