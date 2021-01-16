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

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- mongodb
- Webpack

## Development

### Installing Dependencies


```
npm install
```

With our database now seeded with mock reviews, we can start running out webpack and our server using:
```
npm run build
npm start
```

Now if you visit http://localhost:3000/:id you will see a module rendering based on the id number in the url.

