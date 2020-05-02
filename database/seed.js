const getRestaurants = require('../server/helper/restaurants.js').getRestaurants;
const getPosts = require('../server/helper/restaurants.js').getPosts;
const getDate = require('../server/helper/restaurants.js').getDate;
const getDish = require('../server/helper/restaurants.js').getDish;
const getRandomNum = require('../server/helper/restaurants.js').getRandomNum;
const getUser = require('../server/helper/restaurants.js').getUser;
const getFoodComment = require('../server/helper/restaurants.js').getFoodComment;
const db = require('./index.js');

const restaurantSeed = () => {
  var restaurantNames = getRestaurants();
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
};

const photo = () => {
  for ( var i = 0; i < 100; i++) {
    var foodPhoto = 'https://loremflickr.com/320/240/food';
    var comment = getFoodComment();
    var randomNum = getRandomNum(1, 100);
    db.query(`INSERT INTO pictures (caption, images, id_populardishes) VALUES ("${comment}", "${foodPhoto}","${randomNum}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
};

const popDish = () => {
  var dish = getDish();
  for (var i = 0; i < dish.length; i++) {
    var randomNum = getRandomNum(1,100);
    var popularDish = dish[i]
    db.query(`INSERT INTO populardishes (dish, id_restaurants) VALUES ("${popularDish}","${randomNum}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
};

const users = () => {
  var name = getUser();
  var posts = getPosts();
  for (var i = 0; i < name.length; i++) {
    var star = 1 + Math.floor(Math.random() * 5);
    var randomNumPost = getRandomNum(1, 100);
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
  var posts = getPosts();
  for (var i = 0; i < posts.length; i++) {
    var date = getDate();
    var star = 1+ Math.floor(Math.random()*5);
    var randomNum = getRandomNum(1, 100);
    var randomNum2 = getRandomNum(1, 100);
    var review = posts[i];
    db.query(`INSERT INTO reviews (review, dates, stars, id_populardishes, id_users) VALUES ("${review}", "${date}", "${star}", "${randomNum}", "${randomNum2}")`, (error) => {
      if (error) {
        console.log('This is error=>', error)
      }
    })
  }
}
users();
restaurantSeed();
popDish();
photo();
reviewSeed();

