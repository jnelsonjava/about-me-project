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

console.log(welcomeMessage);
// alert(welcomeMessage);


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

console.log(backgroundMessage);
// alert(backgroundMessage);



var userInterestedInEducation = prompt('Would you like to know about my education? (y/n)').toLowerCase();

var educationMessage;
if (userInterestedInEducation === 'y') {
  educationMessage = 'Great! Coming right up.';
} else if (userInterestedInEducation === 'n') {
  educationMessage = 'You know, maybe that\'s for the best. Hmmm, what\'s next...';
} else {
  educationMessage = failedAnswerMessage;
}

console.log(educationMessage);
// alert(educationMessage);





