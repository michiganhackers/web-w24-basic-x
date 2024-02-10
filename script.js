console.log('running in the console');

// alert('Your computer has virus');

// lots of useful browser APIs
console.log(document);

console.log(document.getElementById('logo'));
console.log(document.getElementById('logo').src);

console.log(document.getElementsByClassName('tweet'));

document.getElementsByTagName('h1')[0].textContent = 'X';

const likeTweet = () => {
  const notification = document.createElement('p');
  notification.innerText = 'Liked!';
  document.getElementsByTagName('body')[0].appendChild(notification);
};

const addTweet = (username, message) => {
  console.log('adding');
  // make this add a tweet to the dom
};
