const data = require('./seedData.js');

const getRestaurants = () => {
  let results = [];

  for (var i = 0; i < 100; i++) {
    results.push(data.generateRestaurant());
  }

return results;
  // console.log('Logging results => ', results);
};

const getDate = () => {
  let date = data.generateDate();
  return date;
};
const getFoodComment = () => {
  let comment = data.generatePictureComment();
  return comment;
}

const getUser = () => {
  let results = [];
  for (var i = 0; i < 100; i++) {
    results.push(data.generateUserName())
  }
  return results;
};

const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min) + min;
}
const getDish = () => {
  let results = [];
  for(var i = 0; i < 100; i++) {
    results.push(data.generateDish());
  }
  return results;
};

const getPosts = () => {
  let results = [];
  for(var i = 0; i < 100; i++) {
    results.push(data.generateReview());
  }
  return results;
};

module.exports = {
  getRestaurants: getRestaurants,
  getPosts: getPosts,
  getDate: getDate,
  getDish: getDish,
  getRandomNum: getRandomNum,
  getUser: getUser,
  getFoodComment: getFoodComment
}

