const express = require("express"); // import bodyParser from "body-parser"; // allows you to access req.body from within routes and use that data.

const bodyParser = require("body-parser"); // allows you to access req.body from within routes and use that data.

const app = express(); // Instantiate an express app, the main work horse of this server
const PORT = 5000; // Backend port - people usually use 5000

app.use(bodyParser.json()); // use json data for our whole application

app.listen(PORT, () =>
  console.log(`YOOOOO SOOOO Server runing on port: http://localhost:${PORT}`)
);
