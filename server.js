const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users= require("./routes/api/users");
const contacts= require("./routes/api/contacts");
const announcements = require("./routes/api/announcements");
const path = require('path');

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
//Connect to MongoDB
// mongoose
//   .connect(
//    db,
//   //  "mongodb://localhost/shearosefarm",
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// Routes
app.use("/api/users", users);
app.use("/api/contacts", contacts);
app.use("/api/announcements", announcements);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/shearosefarm"
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://dbUser:Passw0rd@ds133418.mlab.com:33418/heroku_s62f6pkg");
if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));

  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

