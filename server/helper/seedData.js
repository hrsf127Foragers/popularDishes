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
  randomNumberGenerator: function(array) {
    return Math.floor(Math.random() * (array.length));
  },

  generateRestaurant: function() {
    let randomName = names[this.randomNumberGenerator(names)];
    let randomFoodType = foodTypes[this.randomNumberGenerator(foodTypes)];
    let randomStoreType = storeTypes[this.randomNumberGenerator(storeTypes)];
    return `${randomName}'s ${randomFoodType} ${randomStoreType}`;
  },

  generatePictureComment: function () {
    let randomFood = foodType2[this.randomNumberGenerator(foodType2)];
    let adjectives = commentTypes[this.randomNumberGenerator(commentTypes)];
    return `${adjectives} ${randomFood}`;
  },

  generateUserName: function() {
    let randomFirstName = firstUserName[this.randomNumberGenerator(firstUserName)];
    let randomInitial = lastInitial[this.randomNumberGenerator(lastInitial)];
    return `${randomFirstName}.${randomInitial}`;
  },

  generateDish: function () {
    let randomType1 = foodType[this.randomNumberGenerator(foodType)]
    let randomType2 = foodType2[this.randomNumberGenerator(foodType2)]
    return `${randomType1} ${randomType2}`;
  },

  generateDate: function () {
    let randomMonth = month[this.randomNumberGenerator(month)];
    let randomDay = day[this.randomNumberGenerator(day)];
    let randomYear = year[this.randomNumberGenerator(year)];
    return `${randomMonth}/${randomDay}/${randomYear}`;
  },

  generateReview: function() {
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
    return lorem.generateParagraphs(numOfParagraphs)
  }

};
