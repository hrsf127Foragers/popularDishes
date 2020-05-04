const data = require('./seedData.js');
const restaurant = {};

const getRestaurants = () => {
  let results1 = [];

  for (var i = 0; i < 100; i++) {
    results1.push(data.generateRestaurant(i));
  }

return results1;
  // console.log('Logging results => ', results);
};

const getDate = () => {
  let date = data.generateDate();
  return date;
};

const getFoodComment = () => {
  let comment = data.generatePictureComment();
  return comment;
};

const getPictures = () => {
  let results2 = [];
  for(var i = 0; i < 100; i++) {
    results2.push(data.generatePictures(i))
  }
  return results2;
};

const getUser = () => {
  let results3 = [];
  for (var i = 0; i < 100; i++) {
    results3.push(data.generateUserName(i))
  }
  return results3;
};

const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min) + min;
}
const getDish = () => {
  let results4 = [];
  for(var i = 0; i < 100; i++) {
    results4.push(data.generatePopDish(i));
  }
  return results4;
};

const getReviews = () => {
  let results5 = [];
  for(var i = 0; i < 100; i++) {
    results5.push(data.generateReview(i));
  }
  return results5;
};

module.exports = {
  getRestaurants,
  getReviews,
  getDate,
  getDish,
  getRandomNum,
  getUser,
  getFoodComment,
  getPictures
}

// console.log(getRestaurants())