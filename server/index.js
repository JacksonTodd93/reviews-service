const express = require('express');
const app = express();
const port = 3000;
const client = require('../database/connection.js');
const overallReviews = require('./overallReviews.js');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/:id', express.static(__dirname + "/../public"));

//get review categories
app.use('/api/overall_reviews', overallReviews); // this query needs re-writing, still configured for mongo

// get individual reviews
app.get('/api/individual_reviews/:id', (req, res) => {
  const text = 'SELECT * FROM allreviews WHERE propertyID = ($1)';
  const values = [req.params.id];
  client.query(text, values, (err, result) => {
    if (err) {
      console.log(err);
    }
    const revObj = result.rows[0];
    const avgScore = (revObj.cleanliness + revObj.communication + revObj.checkin + revObj.accuracy
    + revObj.location + revObj.value) / 6;
    revObj.overall = avgScore;
    res.send(revObj);
  });
});

// I've commented out the rest of my CRUD endpoints for now, as they are no longer relevant now that I've moved
// away from Mongo. I've planning a whole lot of work on my back-end in the next day or two, and hope to be
// bringing these back :)

// insert a new review
// app.post('/api/individual_reviews/:id', (req, res) => {
//   const review = new Review({
//     imageURL: req.body.imageURL,
//     user: req.body.user,
//     date: req.body.date,
//     locationID: req.params.id,
//     reviewTxt: req.body.reviewTxt,
//     cleanliness: req.body.cleanliness,
//     communication: req.body.communication,
//     checkin: req.body.checkin,
//     accuracy: req.body.accuracy,
//     location: req.body.location,
//     value: req.body.value,
//   });
//   review.save((err, review) => {
//     if (err) {
//       res.send('Review not saved');
//     } else {
//       res.send('Review saved');
//     }
//   });
// });

// // update an existing review. NOTE: param reviewId is the unique hash for a single review entry, distinct from
// // the id param used on the get and post endpoints, which refers to a listing id
// // the second arg to findOneAndUpdate tells the method we only want to update fields present on the request body.
// // This allows editing as few as one, or as many as all of the fields for a given review entry.
// app.put('/api/individual_reviews/:reviewId', (req, res) => {
//   Review.findOneAndUpdate({ _id: req.params.reviewId }, { $set: req.body }, { new: true }, (err, result) => {
//     if (err) {
//       res.send('Review not updated');
//     } else {
//       res.send('Review updated');
//     }
//   });
// });

// app.delete('/api/individual_reviews/:reviewId', (req, res) => {
//   Review.findOneAndDelete({ _id: req.params.reviewId }, (err, result) => {
//     if (err) {
//       res.send('Review not deleted');
//     } else {
//       res.send('Review deleted');
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});