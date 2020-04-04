const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users= require("./routes/api/users");
const contacts= require("./routes/api/contacts");
const announcements = require("./routes/api/announcements");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
// mongoose
//   .connect(
//    db,
//   //  "mongodb://localhost/shearosefarm",
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/shearosefarm"
mongoose.connect(MONGODB_URI);
// Routes
app.use("/api/users", users);
app.use("/api/contacts", contacts);
app.use("/api/announcements", announcements);


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

