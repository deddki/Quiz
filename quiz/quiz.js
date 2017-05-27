//We start by assuming no answer is correct
var correct = 0;

//Then we ask questions
var answer1 = prompt('Name a programming language that is also a gem');
if (answer1.toUpperCase() === 'RUBY') {
  correct +=1;
}

var answer2 = prompt('Name a programming language that is also a snake');
if (answer2.toUpperCase() === 'PYTHON') {
  correct += 1;
}

var answer3 = prompt('What language do you use to style pages?')
if (answer3.toUpperCase() === 'CSS') {
  correct += 1;
}

var answer4 = prompt('What language do you use to insert content on pages?');
if (answer4.toUpperCase() === 'HTML') {
  correct +=1;
}

var answer5 = prompt('What language do you use to add interactivity to a page?');
if (answer5.toUpperCase() === 'JAVASCRIPT') {
  correct +=1;
}

//output result
document.write('<p>You have answered ' + correct + ' questions right!</p>')

//Output rank
if (correct === 5) {
  document.write('<p>You earned a <strong>GOLD</strong> medal</p>');
} else if (correct >= 3) {
  document.write('<p>You earned a <strong>SILVER</strong> medal</p>');
} else if (correct >= 1) {
  document.write('<p>You earned a <strong>SILVER</strong> medal</p>');
} else {
  document.write('<p>You need to study some more. No medal for you this time</p>')
}