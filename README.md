### Rest API with NodeJS/MongoDb Starter

Rest API development in Javascript using NodeJS, ExpressJS, and MongoDb.

This is a straightforward express microservice. Clients have the ability to obtain all items, retrieve one item by id, delete and update an item by id. Clients can also publish new items and obtain a randomly selected item.

Rate limit: Limit each IP to 50 requests per windowMs.
Pagination: When 'GET' all of the items, put them into pages.


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
GET http://localhost:3000/item
POST http://localhost:3000/item
GET http://localhost:3000/item/random
GET http://localhost:3000/item/:id
UPDATE http://localhost:3000/item/:id
DELETE http://localhost:3000/item/:id


POST or UPDATE JSON example
{
    "name": "aaa",
    "description": 'bbb'
}

```
