# Rest API with NodeJS/MongoDb Starter


This is a straightforward express microservice. Clients have the ability to obtain all items, retrieve one item by id, delete and update an item by id. Clients can also publish new items and obtain a randomly selected item.

* Rate limit: Limit each IP to 50 requests per windowMs.
* Pagination: When 'GET' all of the items, put them into pages.


## Deployed App:

[![rest app](https://img.shields.io/badge/render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://rest-api-with-nodejs-mongodb-starter.onrender.com)


### Configure environment variables

* Create a .env file by copying .env.sample.
* Update the environment variable values in the .env file as needed.

### How to run

```
npm start
npm run dev
```

### Routes
Use request.http file to test routes

```
GET http://localhost:3000/api/item
POST http://localhost:3000/api/item
GET http://localhost:3000/api/item/random
GET http://localhost:3000/api/item/:id
UPDATE http://localhost:3000/api/item/:id
DELETE http://localhost:3000/api/item/:id


POST or UPDATE JSON example
{
    "name": "aaa",
    "description": 'bbb'
}

```
###  File Structure
├── package.json
├── package-lock.json
├── README.md
├── request.http
└── src
    ├── config
    │   └── database.config.js
    ├── controllers
    │   └── items.controller.js
    ├── db
    │   └── connect.js
    ├── dto
    │   └── item.dto.js
    ├── lib
    │   ├── error.handler.js
    │   ├── errors.js
    │   └── logger.js
    ├── middleware
    │   └── validations.js
    ├── models
    │   └── item.models.js
    ├── routes
    │   ├── item.routes.js
    │   └── routes.js
    ├── server.js
    ├── server-local.js
    └── utils
        ├── pagination.js
        └── rateLimit.js

10 directories, 19 files
```