import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Johnson",
    age: 24,
  },
];

// all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("Post route reached");

  const user = req.body;

  users.push(req.body);
  res.send("Post route reached");
});

// router.post(); // from the client to the server

export const userRoutes = router;
