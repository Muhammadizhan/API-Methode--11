const getJokeButton = document.getElementById('getJokeButton');
const jokeText = document.getElementById('jokeText');

// Function to fetch a Chuck Norris joke from the API
function getChuckNorrisJoke() {
  // Show loading message
  jokeText.textContent = 'Fetching joke...';

  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Display the joke on the webpage
      jokeText.textContent = data.value;
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
      // Show error message
      jokeText.textContent = 'Failed to fetch joke. Please try again.';
    });
}

// Add click event listener to the button
getJokeButton.addEventListener('click', getChuckNorrisJoke);
