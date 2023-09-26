const keys = require("./config/keys");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./modules/User");
require("./sevices/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
  maxAge: 30*24*60*60*1000,
  keys: [keys.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())

require("./routes/authRoutes")(app)


const PORT = 5000;
app.listen(PORT);
