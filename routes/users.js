import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

// all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

// Generate new user and random id
router.post("/", (req, res) => {
  const user = req.body;

  // const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  users.push({ ...user, id: uuidv4() }); // generate a user and a random id

  res.send(
    `User "${user.firstName} ${user.lastName}" has been added to the database!`
  );
});

// /users/2 => req.params {id: 2}

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id); // keep everything except for this id

  res.send(`User with the id ${id} deleted from database.`);
});

// export default router;

// router.post(); // from the client to the server

export const userRoutes = router;

///////////////////////////////////////////////////////////////////////

// {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// },
// {
//   firstName: "Jane",
//   lastName: "Johnson",
//   age: 24,
// },
