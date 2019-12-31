// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');
// card.addEventListener('mousemove', runEvent);
// const changeBtn = document.getElementById('changeBtn');
// var quotes =[
//   'Your New Year will be filled with lots of happiness and joy',
//   'You will lots of Joy and Excitement',
//   'Believe in Yourself and Enjoy to Full'
// ]
// function newquote()
// {
//   var num= Math.floor(Math.random()*(quotes.length));
//   document.getElementById('changeBtn').innerHTML = quotes[num];
// }

// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
//   document.getElementById('im').style.display = 'block';
// }


// document.getElementById('main').addEventListener('click', function(e){  
//   document.getElementById('im2').style.display = 'block';
  
//   e.preventDefault();
// });




const quotes = [
    'Your New Year will be filled with lots of happiness and joy',
  'You will lots of Joy and Excitement',
  'Believe in Yourself and Enjoy to Full',
  'Push yourself, because no one else is going to do it for you.',
  'The harder you work for something, the greater you will feel when you achieve it.',
  'Great things never come from comfort zones.',
  'Don’t make change too complicated. Just begin.',
  'If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place.',
  'The temptation to quit will be greatest just before you are about to succeed.',
  ' Little things make big days.',
  'Sometimes we’re tested not to show our weaknesses, but to discover our strengths.',
  'The key to success is to focus on goals, not obstacles.',
  'Deaf people probably don’t understand why farts are funny.',
  'How do vampires always look so neat and tidy if they can’t see themselves in the mirror?',
  'There is only one sunset, and it is been going around the earth for billions of years.',
  'Your best teacher is your last mistake. ',
  'If you get tired learn to rest not to quit. ',
  'Everthing is easy if you are crazy, Nothing will be easy if you are lazy. ',
  'Confidence is Silent, Insecurities are loud. ',
  'Success does not find you, you have to go out and get it. ',
  'We Accept the love we think we deserve. ',
  'Not all the time, a joke is intended to make you laugh. Sometimes, it is intended to make you think. ',
  'Trust yourself, you know more than you think you do.',
  'Never give out all information, let them Wonder. ',
  'You can not live your life to the fullest  if you are carrying yesterday\'s worries. '
]

let index = 0;
let call = setInterval(play, 100);
const h1 = document.getElementById('h1');
let quotesIndex = 0;
let msg;

function play() {
  msg = quotes[quotesIndex];
  h1.innerText = msg.slice(0, index);
  index++;
  if (index > msg.length) {
    if (quotesIndex + 1 >= quotes.length) {
      quotesIndex = 0;
      // clearInterval(call);
    } else {
      quotesIndex++;
      index = 0;
    }
  }
}