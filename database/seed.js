
const db = require('./index.js');
const connection = require('../server/helper/restaurants.js');

const restaurantSeed = () => {
  var restaurantNames = connection.getRestaurants();
  console.log(restaurantNames)
  for(var i = 0; i < restaurantNames.length; i++) {
      var name = restaurantNames[i]['restaurantName'];
      var arrName = name.split(" ");
      var cuisineType = restaurantNames[i]['cuisine'];
      // console.log(name)
    db.query(`INSERT INTO restaurants (names, cuisine) VALUES ("${name}", "${cuisineType}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
};

const photo = () => {
  for ( var i = 0; i < 100; i++) {
    var foodPhoto = 'https://loremflickr.com/320/240/food';
    var comment = connection.getFoodComment();
    var randomNum = connection.getRandomNum(1, 100);
    db.query(`INSERT INTO pictures (caption, images, id_populardishes) VALUES ("${comment}", "${foodPhoto}","${randomNum}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
};

const popDish = () => {
  var dish = connection.getDish();
  for (var i = 0; i < dish.length; i++) {
    var randomNum = connection.getRandomNum(1,100);
    var popularDish = dish[i]
    db.query(`INSERT INTO populardishes (dish, id_restaurants) VALUES ("${popularDish}","${randomNum}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
};

const users = () => {
  var name = connection.getUser();
  var posts = connection.getPosts();
  for (var i = 0; i < name.length; i++) {
    var star = 1 + Math.floor(Math.random() * 5);
    var randomNumPost = connection.getRandomNum(1, 100);
    var avatar = 'https://loremflickr.com/320/240/avatar';
    var reviews = posts[randomNumPost];
    var user = name[i];
    db.query(`INSERT INTO users (userName, avatar, reviews, stars) VALUES ("${user}","${avatar}", "${reviews}","${star}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
};

const reviewSeed = () => {
  var posts = connection.getPosts();
  for (var i = 0; i < posts.length; i++) {
    var date = connection.getDate();
    var star = 1+ Math.floor(Math.random()*5);
    var randomNum = connection.getRandomNum(1, 100);
    var randomNum2 = connection.getRandomNum(1, 100);
    var review = posts[i];
    db.query(`INSERT INTO reviews (review, dates, stars, id_populardishes, id_users) VALUES ("${review}", "${date}", "${star}", "${randomNum}", "${randomNum2}")`, (error) => {
      if (error) {
        console.log('This is error=>', error)
      }
    })
  }
}
// users();
// restaurantSeed();
// popDish();
// photo();
// reviewSeed();
restaurantSeed()
