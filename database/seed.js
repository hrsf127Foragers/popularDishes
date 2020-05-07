
const db = require('./index.js');
const connection = require('../server/helper/restaurants.js');

const restaurantSeed = () => {
  var restaurantNames = connection.getRestaurants();
  // console.log(restaurantNames)
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
  let pictures = connection.getPictures();
  // console.log(pictures)
  for ( let i = 0; i < pictures.length; i++) {
    let caption = pictures[i]['caption'];
    let image = pictures[i]['image'];
    let id_popDish = pictures[i]['id_popularDish'];

    db.query(`INSERT INTO pictures (caption, images, id_populardishes) VALUES ("${caption}", "${image}","${id_popDish}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
};

const popDish = () => {
  var dish = connection.getDish();
  // console.log(dish);
  for (var i = 0; i < dish.length; i++) {
    // var randomNum = connection.getRandomNum(1,100);
    var popularDish = dish[i]['name'];
    var image = dish[i]['image'];
    var id_restaurants = dish[i]['id_restaurants'];
    db.query(`INSERT INTO populardishes (dish, images, id_restaurants) VALUES ("${popularDish}","${image}","${id_restaurants}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
};

const users = () => {
  let name = connection.getUser();
  // console.log(name)
  // let posts = connection.getReviews();
  for (let i = 0; i < name.length; i++) {
      let user = name[i]['userName'];
    // console.log(user)
      let avatarPic = name[i]['avatar'];
      let follower = name[i]['followers'];
      let numReviews = name[i]['numReviews'];

    db.query(`INSERT INTO users (userName, avatar, numOfReviews, followers) VALUES ("${user}","${avatarPic}", "${numReviews}","${follower}")`, (error) => {
      if (error) {
        console.log('This is error =>', error)
      }
    })
  }
};

const reviewSeed = () => {
  let posts = connection.getReviews();
  // console.log(posts)
  for (let i = 0; i < posts.length; i++) {
    let date = posts[i]['date'];
    let stars = posts[i]['stars'];
    let reviewPost = posts[i]['reviews'];
    let id_populardishes = posts[i]['id_popularDish'];
    let id_user = posts[i]['id_user'];

    db.query(`INSERT INTO reviews (review, dates, stars, id_populardishes, id_users) VALUES ("${reviewPost}", "${date}", "${stars}", "${id_populardishes}", "${id_user}")`, (error) => {
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

