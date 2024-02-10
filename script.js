console.log('running in the console');

// alert('Your computer has virus');

// lots of useful browser APIs
console.log(document);

console.log(document.getElementById('logo'));
console.log(document.getElementById('logo').src);

console.log(document.getElementsByClassName('tweet'));

document.getElementsByTagName('h1')[0].textContent = 'X';

const likeTweet = () => {
  alert('Liked!');
};
