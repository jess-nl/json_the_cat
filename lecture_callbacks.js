const args = process.argv.slice(2);
const fs = require('fs')
const request = require('request');

const breedUrl = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(breedUrl, (error, response, body) => {

  if (error) {
    return console.log("Cat breed unsearchable!");
  } else {
    const data = JSON.parse(body); // Convert string body to an object
    console.log(data[0].description); // Body description (cat's description)
  }

});





//Creating a function to get a user asynchronously
const getUserAsync = (callback) => {
  const user = {name: 'Dimitri Ivanovich Mendeleiv', status:'Badass'}
  
  setTimeout(() => {
    if (true) {
      callback(null, user)
    }
  }, (Math.random() * 3000))
}

getUserAsync((error, userData) => {
  if (!error) {
    console.log(userData.name)
  } else {
    console.log('The was an error :/')
  }
})

// //Creating a function to add a username emoji asynchronously

// const prependAnEmojiAsync = (emoji, string, callback) => {
//   setTimeout(() => {
//     const output = `${emoji} - ${string}` // emoji + ' - ' + string
//     if (false) {
//       console.log('There was an error....')
//       callback(error, null)
//       return
//     }
//     callback(null, output)
//   }, (Math.random() * 2000))
// }

// prependAnEmojiAsync('😊', 'Dimitri', (error, output) => {
//   if (error) {
//     console.log('oh no.')
//     return
//   }
//   console.log(output)
// })

// //Combining those two together

// const getUserAndPrependAnEmoji = () => {
//   getUserAsync((error, userData) => {
//     if (error) {
//       console.log('error fetching the user data')
//       return
//     }
//     const output = `${userData.name}, feeling ${userData.status}`
//     prependAnEmojiAsync('😎', output, (error, stringOutput) => {
//       if (error) {
//         console.log('error prepending the emoji')
//         return
//       }
//       console.log(stringOutput)
//     })
//   })
// }

// getUserAndPrependAnEmoji()