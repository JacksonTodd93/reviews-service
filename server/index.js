const express = require('express')
const app = express()
const port = 3000
const Review = require('../database/connection.js')
const overallReviews = require('./overallReviews.js')
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use('/:id', express.static(__dirname + "/../public"));

//get review categories
app.use('/api/overall_reviews', overallReviews);

//get individual reviews
app.get('/api/individual_reviews/:id' , (req, res) => {
  Review.find({}, { user: 1, imageURL: 1, date: 1, reviewTxt: 1, _id: 0}, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  }).where('locationID').equals(req.params.id)
  .sort({ date: -1 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});