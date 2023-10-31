const { HttpStatusCode } = require("axios");
const passport = require("passport");

const router = require("express").Router();

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: `/auth/success`,
    failureRedirect: `/auth/forbidden`,
    failureFlash: true,
  })
);

router.get("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) res.status(404).json(err);
    else res.redirect("http://192.168.0.195:3000/");
  });
});

router.get("/success", (req, res) => {
  res.redirect("http://192.168.0.195:3000/");
});

router.get("/forbidden", (req, res, next) => {
  res.status(HttpStatusCode.Forbidden).json({
    status: HttpStatusCode.Forbidden,
    message: "Invalid email or password",
  });
});

module.exports = router;
