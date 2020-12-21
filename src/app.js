const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");

require("./models/User");
require("./services/passport");
require("./db/connectDB")();

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

module.exports = app;
