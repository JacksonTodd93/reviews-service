const faker = require('faker');
const fs = require('fs');

const reviewsCount = 10000000;
const filename = 'reviews.csv';
const stream = fs.createWriteStream(filename);

const packageReview = (i) => {
  const avatarURL = `${faker.random.number({ 'min': 1, 'max': 36 })}.jpg`;
  const randomYear = faker.random.number({ 'min': 2013, 'max': 2020 });
  const randomMonth = faker.date.month();
  const propertyID = i;
  const user = faker.name.firstName();
  const date = `${randomMonth} ${randomYear}`;
  const text = faker.lorem.paragraph();
  const cleanliness = faker.random.number({ 'min': 0, 'max': 5 });
  const communication = faker.random.number({ 'min': 0, 'max': 5 });
  const checkin = faker.random.number({ 'min': 0, 'max': 5 });
  const accuracy = faker.random.number({ 'min': 0, 'max': 5 });
  const location = faker.random.number({ 'min': 0, 'max': 5 });
  const value = faker.random.number({ 'min': 0, 'max': 5 });
  const scores = [cleanliness, communication, checkin, accuracy, location, value];
  return `${avatarURL},${propertyID},${user},${date},${text},${scores}\n`;
};

(async() => {
  for (let i = 0; i < reviewsCount; i += 1) {
    const reviewsForThisProperty = 2 + Math.floor(Math.random() * 2);
    for (let j = 0; j < reviewsForThisProperty; j += 1){
      const review = packageReview(i);
      if (!stream.write(review)) {
        await new Promise(resolve => stream.once('drain', resolve));
      }
    }
  }
})();
