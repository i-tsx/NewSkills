const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const Database = require("simplifield-sql");
/**
 * @param {Database} db
 */

function initialize(db, passport) {
  const authenticateUser = async (email, password, done) => {
    console.log(email, password);
    const user = await db.select("users", { email });
    if (!user) return done(null, false, { message: "No user with that email" });

    try {
      if (password == user.password) return done(null, user);
      else return done(null, false, { message: "Password incorrect" });
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.email));
  passport.deserializeUser(async (email, done) => {
    const user = await db.select("users", { email });
    return done(null, user);
  });
}

module.exports = initialize;
