const { HttpStatusCode } = require("axios");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(HttpStatusCode.Ok).json(req.user);
});

router.get("/teacher/:grade", async (req, res, next) => {
  if (!req.user || req.user.role !== "teacher")
    return res.status(404).send("Not Allowed");
  const { grade } = req.params;
  const db = req.app.get("db");
  const users = await db.selectAll("users", { role: grade });
  res.status(200).send(users);
});

module.exports = router;
