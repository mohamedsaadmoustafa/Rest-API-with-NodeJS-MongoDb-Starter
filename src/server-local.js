'use strict';
const app = require('./server');
const connectDB = require('./db/connect.db');
const PORT = 3000;

//app.listen(PORT, () => {
//    console.log(`Listening on port http://localhost:${PORT}!`)
//});

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port http://localhost:${PORT}!`)
    })
})