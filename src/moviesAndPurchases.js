const fs = require("fs");

const { nanoid } = require("nanoid");

const path = require("path");
const dataFilePath1 = path.join(__dirname, "../data/movies.json");
const dataFilePath2 = path.join(__dirname, "../data/purchasesCart.json");


let moviesArr = [];
purchases = [];

function loadMovies() {
  try {
    const data = fs.readFileSync(dataFilePath);
     moviesArr= JSON.parse(data);
  } catch (err) {
    moviesArr = [];
  }
}
loadMovies()

function savePurchasesToFile() {
  const dataToWrite2 = JSON.stringify(purchases, null, 2);
  fs.writeFileSync(dataFilePath2, dataToWrite2);
}

function saveMoviesToFile() {
  const dataToWrite = JSON.stringify(moviesArr, null, 2);
  fs.writeFileSync(dataFilePath1, dataToWrite1);
}



function createMovies(title, priceInCents, inStock) {
  const id = nanoid(4);
  const movieName = { id, title, priceInCents, inStock};
  moviesArr.push(movieName);
  saveMoviesToFile();
  return moviesArr;
}

function getMovies() {
    return moviesArr;
  }
  
function listMovies() {
    return moviesArr.map(({ id, title, priceInCents,  }) => ({ id, title, priceInCents }));
  }


  
function viewMovies(id) {
    const movieName = moviesArr.find((m) => m.id === id);
    return movieName
      ? `Id: ${movieName.id}\ntitle: ${movieName.title}\npriceInCents: ${movieName.priceInCents}\ninStock: ${movieName.inStock}  `
      : null;
  }
  
function updateMovies(id, updatedmovieName) {
  // console.log(movieNames, id)
    const movieNameList = moviesArr.findIndex((p) => p.id === id);
    if (movieNameList === -1) {
      return false;
    }
    moviesArr[movieNameList] = {
      ...moviesArr[movieNameList],
      ...updatedmovieName,
    };
    saveMoviesToFile();
    return true;
  }

// function updatemovieName(id, updatedmovieName) {
//     const movieNameList = movieNames.findIndex((p) => p.id === id);
//     if (movieNameList === -1) {
//       return false;
//     }
//     movieNames[movieNameList] = {
//       ...movieNames[movieNameList],
//       ...updatedmovieName,
//       inStock: parseFloat(updatedmovieName.inStock.toFixed(2)),
//     };
//     savemovieNamesToFile();
//     return true;
//   }
  
  function deleteMovie(id) {
    const movieNameList = moviesArr.findIndex((m) => m.id === id);
    if (movieNameList === -1) {
      return false;
    } else {
      moviesArr.splice(movieNameList, 1);
      saveMoviesToFile();
      return true;
    }
  }
  
 
//   sum =0 
//   sum += arr[i]

function loadPurchases() {
  try {
    const data = fs.readFileSync(dataFilePath2);
     purchases= JSON.parse(data);
  } catch (err) {
    console.log(err)
    purchases = [];
  }
  
}
loadPurchases()


  
function createPurchase(title, priceInCents, quantity) {
  // const id = nanoid(4);
  const movieName = { title, priceInCents, quantity};
  purchases.push(movieName);
  savePurchasesToFile();
  return purchases;
}

  function listPurchases() {
    return purchases.map(({ id, title, priceInCents, quantity}) => ({ id, title}));
  }

  function viewPurchases(id) {
    const purchase = purchases.find((p) => p.id === id);
    return purchase
      ? `Id: ${purchase.id}\ntitle: ${purchase.title}\npriceInCents: ${purchase.priceInCents}\ninStock: ${purchase.quantity}  `
      : null;
  }

  function deletePurchase(id) {
    const purchase = purchases.findIndex((p) => p.id === id);
    if (purchase === -1) {
      return false;
    } else {
      purchases.splice(purchase, 1);
      savePurchasesToFile();
      return true;
    }
  }

  function updatePurchase(id, updatedPurchaseName) {
    // console.log(movieNames, id)
      const purchaseIndex = purchases.findIndex((p) => p.id === id);
      if (purchaseIndex === -1) {
        return false;
      }
      purchases[purchaseIndex] = {
        ...purchases[purchaseIndex],
        ...updatedPurchaseName,
      };
      savePurchasesToFile();
      return true;
    }

    function cancelCart() {
        return purchasesCart.length === 0
      }
    
      function calculateTotalPrice() {
        return purchaseCart.reduce((total, { priceInCents }) => total + priceInCents, 0);
      }
    
    
      function calculateTotalinStock() {
        return purchasesCart.reduce((total, {  }) => total + i, 0);
      }
  // movieNames.push(movieName);
  // saveMoviesToFile();
  // return movieName;

  module.exports = {
    createMovies,
    listMovies,
    viewMovies,
    updateMovies,
    deleteMovie,
    loadMovies,
    getMovies,
    createPurchase,
    listPurchases,
    viewPurchases,
    deletePurchase,
    updatePurchase,
    cancelCart,
    calculateTotalPrice,
    calculateTotalinStock
  };





//   const fs = require("fs");
// const nanoid = require("nanoid");
// const { faker } = require('@faker-js/faker');
// const fs = require("node:fs");
// const { writeFileSync } = require("node:fs");

// /*
// id: `${nanoid(5)}`
//     title: faker.custom.movieNames = generatedMovieNames(),
//     genre: faker.custom.genres(),
//     priceInCents: faker.commerce.price(1, 100, 2)
//     inStock: true
// */

// object.{
    
// }

// const movies = []

// function generateMovieNames() {
//     const movieNames = ["Interstellar",
//     "Bladerunner 1982",
//     "Matrix", 
//     "Lord of War", 
//     "Ex Machina", 
//     "Train to busan",
//     "Children of Men",
//     "VHS 1",
//     "Lord of the Rings trilogy", 
//     "Come True",
//     "Eternal Sunshine of a spotless Mind", 
//     "Her",
//     "Terminator",
//     "Clockwork Orange",
//     "Alien",
//     "Spiderman 2",
//     "There will be blood",
//     "Parasite",
//      "Nightmare on Elm Street"
//     ]
// return movieNames[Math.floor(math.random() * movieNames.length)]

// }

// faker.custom = {};
// faker.custom.genres = generatedGenres
// faker.custom.movieNames = generatedMovieNames;
// faker.custom.movieNames()


// function genGenres() {
//     const genres = [
//         "Action",
//         "Sci-fi",
//         "Horror",
//         "Psychological Thriller",
//     ];
//     return genres[Math.floor(Math.random() * genres.length)];
// }



// function addMovie(data) {
//     movies.push(data);
//     return data;
// }


// function listMovies() {

// }


// function retrieveMovie() {

// }

// function deleteMovie() {

// }


// function updateMovie() {

// }

// Codeium: Refractor|Explain|Generate JSDocfunction 
// function savedMovies() {
// const stringifiedData = JSON.stringify(movies, null, 2);
//     fs.writeFileSync("./data/movies.json", stringifiedData)
// }

// addMovies9{ id: `${nanoid(5)}`, title: faker.custom.movieNames(), genre: faker.custom.genres(), priceInCents}


// // Create a GitHub repository.
// // Your GitHub repository should have a README.md file with setup instructions and a guide/cheatsheet on how to user your application (what commands are available, show some sample commands).
// // You have a .gitignore that is set up to ignore at least node_modules and .DS_Store and will ignore additional files, as needed.
// // You have a sample JSON file with some sample data. It should be an array of at least three objects. Each object should contain the following properties and at least one other property unique to your item:
// // title
// // priceInCents
// // inStock
// // You have a JSON file where your application will read from and write to.
// // You have an index.js file that is the entry point to your application
// // You have an updated package.json that has an appropriate title, and description. It also has your title as the author and it has a series of scripts that align with the functionality of your application. If your app requires additional packages, they are correctly set up as dependencies in this file as well.
// // Features

// // A user can create a new item.
// // A user can see a list of all the items.
// // A user can see the details of one item.
// // A user can delete an item.
// // A user can update an item.
// // When a user performs an action like creating or deleting an item, the data file is updated correctly. If the JSON is malformed, there is some logic to prevent writing to the file and thus corrupting the data file.
// // When a user creates an item a unique id is assigned to the new item.
// // Add a cart function where a user can add items to the shopping cart and see the total price and total number of each item
// // Add a cancel cart function that empties the shopping cart.
// // Mastery rubric

// // This section of the project is designed to measure your increasing skill at writing good code and following best practices.

// // To view components of the mastery rubric, view the appropriate assignment on Canvas.

// // Stretch goals

// // This section of the project measures your ability to go above and beyond in creating your project. To score points in this section, you should incorporate a feature, technology, or skill not explicitly required by the project instructions.

// // When you submit your pull request, make sure to include a description of any stretch goals you implemented. You may choose from the list below or come up with features or tasks that are more relevant to your specific implementation of the project.

// // Add a new command that lets the user filter by a item property like:
// // a true/false value (see all cookies that are vegan).
// // a greater than/less than value (see all shoes that cost more than $100).
// // Add unit testing with Jest.
// // Add the npm library chalk to make the use interaction clearer and more exciting.
// // Use readline to create an interactive menu for the user to interact with.
// // Project setup and overview

// // There are no tests for this project and you should not fork and clone this repository. Instead, create your own repository and start a new npm project.

// // Example

// // For example, you can choose to track the inventory of "cookies" at a bakery. In that case, the keys you store for each cookie could be "title", "priceInCents", "inStock", and "isVegan". Alternatively, you could track "shoes" at a shoe store. In addition to the required keys, you might also track shoeSize.

// Add a cart function where a user can add items to the shopping cart and see the total price and total number of each item
// Add a cancel cart function that empties the shopping cart.
