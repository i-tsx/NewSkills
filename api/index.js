const methodOverride = require("method-override");
const session = require("express-session");
const Store = require("connect-mongodb-session")(session);
const flash = require("express-flash");
const passport = require("passport");
const express = require("express");
const cors = require("cors");
const app = express();
const initializePassport = require("./passport.config");
const Authenticate = require("./router/Authenticate");
const { HttpStatusCode } = require("axios");
const User = require("./router/User");
const { host } = require("./config");
const Database = require("simplifield-sql");

app.use(
  cors({
    origin: [host],
    credentials: true,
  })
);

const db = new Database({
  user: "root",
  host: "localhost",
  port: 3306,
  database: "newskills",
  charset: "utf8mb4",
});
initializePassport(db, passport);
app.set("db", db);
app.use(flash());
app.use(
  session({
    secret: "mysupersecretstring",
    cookie: { maxAge: 6.048e8 },
    saveUninitialized: false,
    resave: false,
    store: new Store({
      uri: "mongodb+srv://root:qviIt2jLPxghUXgj@sessions.8qey3wg.mongodb.net/strategy",
      collection: "sessions",
      connectionOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ limit: "100mb", extended: false }));

db.on("connect", () => console.log("Connected to mysql 👍"));

// Routers
app.use("/auth", Authenticate);
app.use(
  "/user",
  (req, res, next) => {
    if (!req.user)
      return res.status(HttpStatusCode.Unauthorized).json({
        status: HttpStatusCode.Unauthorized,
        message: "Unauthorized",
      });
    else next();
  },
  User
);
// Error handling
app.use((error, req, res, next) => {
  console.log(error);
  if (error)
    res.status(HttpStatusCode.BadGateway).json({
      status: HttpStatusCode.BadGateway,
      message: "BadGateway",
      error,
    });
});

app.listen(80);
