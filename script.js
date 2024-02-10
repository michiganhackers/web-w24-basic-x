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

const addTweet = () => {
  console.log('adding');
  const username = 'bztravis';
  // make this add a tweet to the dom

  // query the tweetInput box to get the text the user wants to tweet
  // query the tweetContainer div
  // create div element (don't forget to add the class name of tweet)
  // add the username and text
  // append the new tweet root element to be a child of the tweetContainer
  // use google to help you!
};
