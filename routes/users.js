import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// all routes in here are starting with /users
router.get("/", getUsers);

// Generate new user and random id
router.post("/", createUser);

// /users/2 => req.params {id: 2} //

// Find a user through id placeholder
router.get("/:id", getUser);

// Delete user via id
router.delete("/:id", deleteUser);

// Update / Patch
router.patch("/:id", updateUser);

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
