import express from "express";
import * as userService from "../services/users";

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ body: "Saas Api" });
});

router.get("/users", async (req, res, next) => {
  const users = await userService.getAll(req.id);
  res.json({ users });
});

module.exports = router;