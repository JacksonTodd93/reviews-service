const Review = require('./connection.js');
const mongoose = require('mongoose');
var faker = require('faker');

//seed database for 100 random entries
for (var i = 0; i < 101; i++) {
  let randomImgNum = faker.random.number({ 'min': 1, 'max': 36 });
  let randomYear = faker.random.number({ 'min': 2013, 'max': 2020 });
  let randomMonth = faker.date.month();
  let randomLocation = faker.random.number({ 'min': 1, 'max': 3 });
  //generate random review data
  let review = new Review({
    imageURL: `https://airbnbprojectimages.s3.us-east-2.amazonaws.com/${randomImgNum}.jpg`,
    user: faker.name.firstName(),
    date: randomMonth + ' ' + randomYear,
    locationID: randomLocation,
    reviewTxt: faker.lorem.paragraph(),
    cleanliness: faker.random.number({ 'min': 0, 'max': 5 }),
    communication: faker.random.number({ 'min': 0, 'max': 5 }),
    checkin: faker.random.number({ 'min': 0, 'max': 5 }),
    accuracy: faker.random.number({ 'min': 0, 'max': 5 }),
    location: faker.random.number({ 'min': 0, 'max': 5 }),
    value: faker.random.number({ 'min': 0, 'max': 5 })
  });
  // save random review data to database or log error
  review.save((err, review) => {
    if (err) {
      console.log(err);
    } else {
      console.log("saved to database")
    }
  });
}