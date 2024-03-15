const addPost = () => {

  // get the text from the input
  const input = document.getElementById('postInput')
  const postText = input.value
  // alert(postText)

  // make new post elements
  // make a div
  const tweetDiv = document.createElement('div')
  tweetDiv.className = 'tweet'
  // make an h2 w/ Username as its content
  const username = document.createElement('h2')
  username.innerHTML = "Username"
  // make a p tag with the post text from the input as its content
  const postContent = document.createElement('p')
  postContent.innerHTML = postText
  // add a like button
  const likeButton = document.createElement('button')
  likeButton.innerHTML = "like"

  tweetDiv.appendChild(username)
  tweetDiv.appendChild(postContent)
  tweetDiv.appendChild(likeButton)

  // append to the DOM
  const container = document.getElementById('postContainer')
  container.appendChild(tweetDiv)
}
