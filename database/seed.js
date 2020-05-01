const getRestaurants = require('../server/helper/restaurants.js').getRestaurants;
const db = require('./index.js');

const restaurantSeed = () => {
  var restaurantNames = getRestaurants()
  // console.log('this is restaurants =>', restaurantNames)
  for(var i = 0; i < restaurantNames.length; i++) {
      var name = restaurantNames[i];
      var arrName = name.split(" ");
      var cuisineType = arrName[1];
      // console.log(arrName)
    db.query(`INSERT INTO restaurants (names, cuisine) VALUES ("${name}", "${cuisineType}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
}
restaurantSeed()

