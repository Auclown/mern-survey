const express = require("express");
require("./services/passport");
require("./db/connectDB")();

const app = express();

require("./routes/authRoutes")(app);

module.exports = app;
