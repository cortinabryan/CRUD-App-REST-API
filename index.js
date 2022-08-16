import express from "express"; // library / framework
import bodyParser from "body-parser"; // allows you to access req.body from within routes and use that data.

import { userRoutes } from "./routes/users.js";

const app = express(); // Instantiate an express app, the main work horse of this server
const PORT = 5000; // Backend port - people usually use 5000

app.use(bodyParser.json()); // use json data for our whole application

app.use("/users", userRoutes);

app.get("/", (res, req) => {
  res.setEncoding("Hello from Homepage!");
});

app.listen(PORT, () =>
  console.log(`YOOOOO SOOOO Server runing on port: http://localhost:${PORT}`)
);

////////////////////////////////////////////////////////////////////////

// GET 		/users 		finds all users
// POST 	/users		 creates a user
// GET	 	/users/:id	 find user details
// DELETE /users/:id 	deletes a user
// PATCH  /users/:id 	updates a user
