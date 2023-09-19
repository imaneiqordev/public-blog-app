const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys.js");
require("./models/User.js");
require("./services/passport.js");
mongoose.connect(keys.mongoURI || "mongodb://127.0.0.1:27017");

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
