const faker = require('faker');
const fs = require('fs');

const reviewsCount = 10000000;
const filename = 'reviews.csv';
const stream = fs.createWriteStream(filename);

const packageReview = () => {
  const avatarURL = `${faker.random.number({ 'min': 1, 'max': 36 })}.jpg`;
  const randomYear = faker.random.number({ 'min': 2013, 'max': 2020 });
  const randomMonth = faker.date.month();
  const propertyID = faker.random.number({ 'min': 1, 'max': 3 });
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

const startWriting = (writeStream, encoding, done) => {
  let i = reviewsCount;
  const writing = function() {
    let canWrite = true;
    do {
      i -= 1;
      let review = packageReview();
      if (i === 0) {
        writeStream.write(review, encoding, done);
      } else {
        writeStream.write(review, encoding);
      }
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  };
  writing();
};

stream.write('avatarURL,propertyID,user,date,text,scores\n', 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end();
});
