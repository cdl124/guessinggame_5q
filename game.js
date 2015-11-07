var score = 0; // The score will increment by one with each correct answer

// I will make all answers convert to lowercase.

// Asking for user's name, so to create personalized messages

var name = prompt("What's your name?", "Name here!");
alert("It's nice to meet you, " + name + ". Let's guess five things about me!")

// Question 1

var guess1 = prompt('Have I been to Europe? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess1 + '. The answer is...');

// Correct answer is 'no'
if ((guess1 === 'no')||(guess1 === 'n')) {
  score += 1;
  alert("... correct, " + name + ", I haven't been to Europe yet! Maybe one day.");
}
else {
  alert("... no. Sadly, " + name + ", I actually haven't been to Europe.");
};

// Question 2

var guess2 = prompt('Can I do a cartwheel? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess2 + '. The correct answer is...');

// Correct answer is 'yes'
if ((guess2 === 'yes')||(guess2 === 'y')) {
  score += 1;
  alert('... yes, I can cartwheel! Watch this, ' + name + '! *cartwheels*');
}
else {
  alert("...um, what! Of course I can do a cartwheel, " + name + " the doubter. Watch me!");
};

// Question 3

var guess3 = prompt('Have I ever broken a bone? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess3 + '. The correct answer is...');

// Correct answer is 'no'
if ((guess3 === 'no')||(guess3 === 'n')) {
  score += 1;
  alert('...correct, ' + name + '! No bones of mine have been broken... yet...');
}
else {
  alert("...no, I actually haven't broken any bones, " + name + "! ...yet...");
};

// Question 4, a numeric one!

var guess4 = parseInt(prompt('At what age did I start doing gymnastics, one of my favorite sports? Enter a number only, no letters!'));
// Here, I'm trying to get numeric input only. No letters!
alert("You guessed age " + guess4 + ".");

// Correct answer is 10 years
if (guess4 === 10) {
  score += 1;
  alert("And that's right, " + name + "! I wasn't all *that* young, really.")
}

else if (guess4 < 10) {
  alert("Oh! Nope, didn't start that young.")
}

else if (guess4 > 10) {
  alert ("Ah, no, sorry, didn't start that late.")
}

else {
  alert("Numeric input only! Sorry...")
}

/// Question 5

var guess5 = prompt('Do I drive a hybrid car?? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess5 + '. And...');

// Correct answer is 'yes'
if ((guess5 === 'yes')||(guess5 === 'y')) {
  score += 1;
  alert("... I do! A cute little '02 Prius. Vroom vroom, " + name + ".");
}
else {
  alert("...I do, actually. Cutest little '02 Prius you ever did see, " + name + ".");
};

// Question 6 - last one.

var guess6 = parseInt(prompt('How many languages can I speak fluently? Enter a number only.'));
alert("You guessed " + guess6 + " languages.");

// Correct answer is just one language.
if (guess6 === 1) {
  score += 1;
  alert("That's right, " + name + ". All I speak fluently is good ol' English.")
}

else if (guess6 < 1) {
  alert("Whatever you say, " + name + ". Whatever you say.")
}

else if (guess6 > 1) {
  alert ("Ha! Nope. Fooled you into thinking I was one of those cool people who speaks multiple languages.")
}

else {
  alert("Numeric input only! Sorry...")
}

// Shows how many questions the user got correct
alert('You got ' + score + ' out of 6 questions correct!');

