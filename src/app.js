const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const app = express();

passport.use(new GoogleStrategy());

module.exports = app;
