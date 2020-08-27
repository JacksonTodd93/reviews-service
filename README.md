# Reviews Module

> a static module that renders mock review data, displaying a bar for each review category and featuring individual user reviews.

## Related Projects

  - https://github.com/hrr47-fec8-webber/booking-service
  - https://github.com/hrr47-fec8-webber/carousel-service
  - https://github.com/hrr47-fec8-webber/moreplacestostay-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Choose between 3 id locations to review mock data highligting the 6 most recent reviews and displaying 6 average category scores by visiting http://localhost:3000/:id. Click on the button at the bottom of the page to view all user reviews.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- mongodb
- Webpack

## Development

### Installing Dependencies

> To get the module working properly, first ensure you have mongodb installed and set up to work properly. To check, in your terminal insert:
`mongod --version`
If you do not have mongodb available, you can visit https://www.mongodb.com/ for more information on how to get started.

Once we have mongodb set up, lets get mongodb running in the background by opening up a terminal window and enter `sudo mongod`. Keep this window open when seeding the database. Then, we will download all necessary files starting in the root directory of our module with:
```
npm install
```

Now we can seed our mongodb database with the command:
```
npm run seed-db
```

With our database now seeded with mock reviews, we can start running out webpack and our server using:
```
npm run build
npm start
```

Now if you visit http://localhost:3000/:id you will see a module rendering based on the id number in the url.

## CRUD Endpoints:

Create:
> POST request to /api/individual_reviews/:id inserts a new review for that listing ID.
Request body structure (all properties are required):
{
    imageURL: string,
    user: string,
    date: string containing a month and year (e.g. 'August 2020')
    reviewTxt: string,
    cleanliness: integer 0 to 5,
    communication: integer 0 to 5,
    checkin: integer 0 to 5,
    accuracy: integer 0 to 5,
    location: integer 0 to 5,
    value: integer 0 to 5,
}

Read:
> GET request to /api/individual_reviews/:id retrieves all reviews associated with given listing ID.

Update:
> PUT request to api/individual_reviews/:reviewId will update that review. Note that reviewId is the unique hash value for a given review, and is distinct from the listing ID used in Read and Create endpoints. The request body can include any or all of the properties required for the request body in the Create endpoint. Only those properties included in the request body will be updated.

Delete:
> DELETE request to api/individual_reviews/:reviewId will delete that review. Note that reviewId is the unique hash value for a given review, and is distinct from the listing ID used in Read and Create endpoints. Request should have an empty body.