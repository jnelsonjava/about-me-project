'use strict';

// Global Variables

var totalCorrectGuesses = 0;
var userName;
var failedAnswerMessage = 'I\'m sorry, I didn\'t understand. Make sure to answer "y" for yes or "n" for no. I\'ll assume that was a yes and move on.';
var userInterestedInBackground;
var userInterestedInEducation;
var userInterestedInWorkHistory;
var userInterestedInHobbies;
var userInterestedInPet;


// Function Declarations

function askUserName() {
  var userName = prompt('Welcome to a page about the author of the page. First, what\'s your name?');
  var welcomeMessage = 'Welcome, ' + userName + '! I just have a few questions to make sure you get the information you want.';

  alert(welcomeMessage);
  return userName;
}

function askBackgroundInterest() {
  var userInterestedInBackground = prompt('Would you like to know about where I\'m from? (y/n)  ').toLowerCase();

  var backgroundMessage;
  if (userInterestedInBackground === 'y') {
    backgroundMessage = 'Thanks for your interest. I\'ll add that to the page.';
    totalCorrectGuesses++; // incrementing good or correct answers
  } else if (userInterestedInBackground === 'n') {
    backgroundMessage = 'That\'s fine, let\'s see if there\'s something else you would like to  know.';
  } else if (userInterestedInBackground === '') {
    backgroundMessage = failedAnswerMessage;
  } else {
    backgroundMessage = failedAnswerMessage;
  }

  alert(backgroundMessage);
  return userInterestedInBackground;
}

function askEducationInterest() {
  var userInterestedInEducation = prompt('Would you like to know about my education? (y/n)'). toLowerCase();

  var educationMessage;
  if (userInterestedInEducation === 'y') {
    educationMessage = 'Great! Coming right up.';
    totalCorrectGuesses++; // incrementing good or correct answers
  } else if (userInterestedInEducation === 'n') {
    educationMessage = 'You know, maybe that\'s for the best. Hmmm, what\'s next...';
  } else {
    educationMessage = failedAnswerMessage;
  }

  alert(educationMessage);
  return userInterestedInEducation;
}

function askWorkHistoryInterest() {
  var userInterestedInWorkHistory = prompt('Would you like to know about my work history? (y/n) ').toLowerCase();

  var workHistoryMessage;
  if (userInterestedInWorkHistory === 'y') {
    workHistoryMessage = 'I\'m flattered. Let me see what I can put together for you';
    totalCorrectGuesses++; // incrementing good or correct answers
  } else if (userInterestedInWorkHistory === 'n') {
    workHistoryMessage = 'No problem, moving on...';
  } else {
    workHistoryMessage = failedAnswerMessage;
  }

  alert(workHistoryMessage);
  return userInterestedInWorkHistory;
}

function askHobbiesInterest() {
  var userInterestedInHobbies = prompt('Would you like to know about my personal hobbies? (y/n) ').toLowerCase();

  var hobbiesMessage;
  if (userInterestedInHobbies === 'y') {
    hobbiesMessage = 'Cool, I\'m excited to share my interests with you!';
    totalCorrectGuesses++; // incrementing good or correct answers
  } else if (userInterestedInHobbies === 'n') {
    hobbiesMessage = 'Sure, let\'s keep it simple.';
  } else {
    hobbiesMessage = failedAnswerMessage;
  }

  alert(hobbiesMessage);
  return userInterestedInHobbies;
}

function askPetInterest() {
  var userInterestedInPet = prompt('Would you like to know about my pet cat? (y/n)').toLowerCase();

  var petMessage;
  if (!totalCorrectGuesses && userInterestedInPet === 'n') {
    petMessage = 'You know what, ' + userName + '? You\'ve answered no to everything. I\'m  just going to give you all the info and leave you to it. Jeez, some people...';
  } else if (userInterestedInPet === 'y') {
    petMessage = userName + ', you just made my day.';
    totalCorrectGuesses++; // incrementing good or correct answers
  } else if (userInterestedInPet === 'n') {
    petMessage = 'Well, ' + userName + ', I\'m showing you a picture of my cat anyways.';
  } else {
    petMessage = failedAnswerMessage;
  }

  alert(petMessage);
  return userInterestedInPet;
}

function hideElementIfUserAnswerNo(userResponse, elId) {
  if (userResponse === 'n') {
    var elToHide = document.getElementById(elId);
    elToHide.style.display = 'none';
  }
}

function guessNumber() {
  var correctNumber = Math.floor(Math.random() * 21);

  var correctGuessMessage = 'You can see into my mind!! Great guessing. The number was ' + correctNumber + '.';
  var incorrectGuessMessage = 'That\'s not it. The number I\'m thinking of is ';

  for (var i = 0; i < 4; i++) {
    if (i === 0) {
      var userGuess = parseInt(prompt('Hey ' + userName + ', let\'s play a game. I\'m thinking of a number between 0 and 20. Try to guess it! I\'ll give you 4 tries...'));
    } else {
      userGuess = parseInt(prompt('Try again! (between 0 and 20)'));
    }

    if (userGuess === correctNumber) {
      alert(correctGuessMessage);
      totalCorrectGuesses++;
      break;
    } else if (userGuess < correctNumber) {
      alert(incorrectGuessMessage + 'higher than ' + userGuess + '.');
    } else if (userGuess > correctNumber) {
      alert(incorrectGuessMessage + 'lower than ' + userGuess + '.');
    } else {
      alert('I didn\'t understand that input, so I\'m assuming it was not correct');
    }
  }

  if (userGuess !== correctNumber) {
    alert('Sorry, that was your last guess. The correct answer was ' + correctNumber + '. Maybe next time.');
  }
}

function guessAnimal() {
  var favAnimals = ['cat', 'cats', 'dog', 'dogs', 'bunny', 'bunnies', 'rabbit', 'rabbits'];

  alert('Let\'s play another game! Try to guess one of my favorite animals. I\'ll give you 6 tries.');

  var userAnimalGuess;
  var userGuessIsCorrect = false;
  for (var i = 0; i < 6; i++) {

    userAnimalGuess = prompt('What is one of my favorite animals? This is guess number ' + (i + 1)).toLowerCase();

    for (var j = 0; j < favAnimals.length; j++) {
      if (userAnimalGuess === favAnimals[j]) {
        userGuessIsCorrect = true;
        break;
      }
    }

    if (userGuessIsCorrect) {
      alert('You got it! I love me some ' + userAnimalGuess + '!');
      totalCorrectGuesses++; // incrementing good or correct answers
      break;
    } else {
      alert('Sorry, that\'s not on my top animals list.');
    }
  }

  if (!userGuessIsCorrect) {
    var randomArrayIndex = Math.floor(Math.random() * favAnimals.length);
    alert('Looks like that was your last guess. Here is one of the acceptable answers: ' + favAnimals [randomArrayIndex]);
  }
}

function hideRequestedElementsUnlessBadSport() {
  if (totalCorrectGuesses) {
    hideElementIfUserAnswerNo(userInterestedInBackground, 'background');
    hideElementIfUserAnswerNo(userInterestedInEducation, 'education');
    hideElementIfUserAnswerNo(userInterestedInWorkHistory, 'work-history');
    hideElementIfUserAnswerNo(userInterestedInHobbies, 'hobbies');
    hideElementIfUserAnswerNo(userInterestedInPet, 'pet');
  }
}

function tallyScoreAndAward() {
  var commendation = [
    'Fritzi is dissapointed in you.',
    'You seemed distracted.',
    'Better luck next time.',
    'Not bad! Maybe worth another try.',
    'Good show, good show.',
    'Well done. I hope you feel good about how you\'ve done, because I think it\'s great',
    'Wow. You are a great guesser!',
    'You\'re the best around. Nothin\'s ever gonna keep you down.'
  ];

  alert('Thanks for playing! I\'ve been keeping track of your answers. Here\'s your score: ' + totalCorrectGuesses + ' out of 7! ' + commendation[totalCorrectGuesses]);
}



// Function Calls

userName = askUserName();
userInterestedInBackground = askBackgroundInterest();
userInterestedInEducation = askEducationInterest();
userInterestedInWorkHistory = askWorkHistoryInterest();
userInterestedInHobbies = askHobbiesInterest();
userInterestedInPet = askPetInterest();
hideRequestedElementsUnlessBadSport();
guessNumber();
guessAnimal();
tallyScoreAndAward();

