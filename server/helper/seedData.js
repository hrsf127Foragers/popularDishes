const LoremIpsum = require("lorem-ipsum").LoremIpsum;


let names = ['Joe', 'Mike', 'Trevor', 'Servio', 'Charlie', 'Lou', 'Jake', 'Jack', 'Tom', 'Jill', 'Sandy', 'Beth', 'Bob', 'Lindsay', 'Mary', 'Carlos', 'Nick', 'Ben', 'Jerry', 'Scooby', 'Scrappy'];

let foodTypes = ['Mexican', 'Tacos', 'Burritos', 'Pizza', 'Italian', 'American', 'Burgers', 'Seafood', 'Crab', 'Lobster', 'Dumplings', 'Fried Chicken', 'Chinese', 'Sandwiches', 'Sushi', 'Pancakes', 'Waffles', 'Beer'];

let storeTypes = ['Bistro', 'Stand', 'Shack', 'Restaurant', 'House', 'Parlor', 'Bar', 'Truck', 'Place', 'Kitchen', 'Corner', 'Spot'];

let commentTypes = ['yummy','awesome', 'great', 'Not so great' , 'Cannot miss this', 'The best', 'hot-diggy-dang'];

let foodType = ['vegetables','chicken', 'beef', 'pork', 'carne-asada','lamb', 'corn', 'fried', 'baked','steamed', 'spicy','fish','lobster']

let foodType2 = ['rice', 'noodle', 'taco', 'burito', 'bbq', 'sushi', 'sandwich', 'burger', 'Dumpling', 'pankcake', 'pizza', 'soup', 'fried rice', 'stew']

let month = ['01','02','03','04','05','06','07','08','09','10','11','12'];
let day = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
let year = ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];

let firstUserName = ['Mgd','dawg','Mik','Jaz','Happy','Lorz','Gdm', 'Mary','Bob','Kit','Josh','Draper','Foodz','Yumz','King','Yeep'];
let lastInitial = ['A','K','P','L','S','Z','E','J','W','T'];

module.exports = {
  randomIndexGenerator: function(array) {
    return Math.floor(Math.random() * (array.length));
  },

  generateRandomNum: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min) + min;
  },

  generateRestaurant: function(id) {
    let randomName = names[this.randomIndexGenerator(names)];
    let randomFoodType = foodTypes[this.randomIndexGenerator(foodTypes)];
    let randomStoreType = storeTypes[this.randomIndexGenerator(storeTypes)];
    let name = `${randomName}'s ${randomFoodType} ${randomStoreType}`;
    let restaurant = {
      id: id,
      restaurantName: name,
      cuisine: randomFoodType,
    }
    return restaurant;
  },

  generatePopDish: function (id) {
    let randomType1 = foodType[this.randomIndexGenerator(foodType)]
    let randomType2 = foodType2[this.randomIndexGenerator(foodType2)]
    // return `${randomType1} ${randomType2}`;
    let dishName = `${randomType1} ${randomType2}`;
    let foodPhoto = `https://loremflickr.com/320/240/meal?random=${this.generateRandomNum(1, 25)}`;
    let popDish = {
      id: id,
      name: dishName,
      image: foodPhoto,
      id_restaurants: this.generateRandomNum(1, 25)
    }
    return popDish;
  },

  generatePictures: function (id) {
    let randomFood = foodType2[this.randomIndexGenerator(foodType2)];
    let adjectives = commentTypes[this.randomIndexGenerator(commentTypes)];
    let picCaption = `${adjectives} ${randomFood}`;
    let foodPhoto = `https://loremflickr.com/320/240/meal?random=${this.generateRandomNum(1, 25)}`;

    let pictures = {
      id: id,
      caption: picCaption,
      image: foodPhoto,
      id_popularDish: this.generateRandomNum(1, 40)
    }
    return pictures;
  },

  generateUserName: function(id) {
    let randomFirstName = firstUserName[this.randomIndexGenerator(firstUserName)];
    let randomInitial = lastInitial[this.randomIndexGenerator(lastInitial)];
    // return `${randomFirstName}.${randomInitial}`;
    let nameOfUser = `${randomFirstName}.${randomInitial}`;
    let avatarPic = `https://loremflickr.com/320/240/selfie?random=${this.generateRandomNum(1, 25)}`;
    let users = {
      id: id,
      userName: nameOfUser,
      avatar: avatarPic,
      followers: this.generateRandomNum(1, 300),
      numReviews: this.generateRandomNum(1, 200)
    }
    return users;
  },

  generateDate: function () {
    let randomMonth = month[this.randomIndexGenerator(month)];
    let randomDay = day[this.randomIndexGenerator(day)];
    let randomYear = year[this.randomIndexGenerator(year)];
    return `${randomMonth}/${randomDay}/${randomYear}`;
  },

  generateReview: function(id) {
    const lorem = new LoremIpsum ({
      sentencesPerParagraph: {
        max: 3,
        min: 1
      },
      wordsPerSentence: {
        max: 8,
        min: 4
      }
    });
    let numOfParagraphs = 1 + Math.floor(Math.random() * 3);

    let reviews = {
      id: id,
      reviews: lorem.generateParagraphs(numOfParagraphs),
      date: this.generateDate(),
      stars: this.generateRandomNum(1, 5),
      id_popularDish: this.generateRandomNum(1, 20),
      id_user: this.generateRandomNum(1, 15)
    }
    return reviews;
  }

};
