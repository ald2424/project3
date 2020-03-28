const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const db = require("../../../models/User")

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`
);



// db.Instructor.create({
//   name: "Abby",
//   email: "abigaild2424@gmail.com",
//   password: "password"
// }).then (dbInstructor => {
//   console.log(dbInstructor)
// }).catch(({ message }) => {
//   console.log(message);
// });

db.User.create({
  name: "Abby",
  email: "abigaild2424@gmail.com",
  password: "password"
}).then (dbUser => {
  console.log(dbUser)
}).catch(({ message }) => {
  console.log(message);
});







app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
