const args = process.argv.slice(2);
const request = require('request');

const breedUrl = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(breedUrl, (error, response, body) => {

  const data = JSON.parse(body); // Convert string body to an object

  if (error) {
    console.log(`There was an error 💀`, error);
  } else if (!data[0]) {
    console.log(`There was an error 💀`, error);
  } else {
    console.log(data[0].description);
  }

});

fetchBreedDescription('Siberian', (error, description) {

});