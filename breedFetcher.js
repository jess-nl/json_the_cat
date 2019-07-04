const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const breedUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(breedUrl, (error, response, body) => {

    const data = JSON.parse(body); // Convert string body to an object
    // console.log(data)
    if (error) {
      // Outcome:	error, (value	description value)
      callback(error, `There was an error 💀`);
    } else if (data.length === 0) {
      // Failure:	(the error we get from request),	null
      callback('nothing found 💀', undefined);
    } else {
      // Success:	null,	(the description from body)
      callback(null, data[0].description);
    }
 
  });

};


module.exports = { fetchBreedDescription };