const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

module.exports = app;
