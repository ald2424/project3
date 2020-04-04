const express = require("express");
const router = express.Router();

// Load Validation model for contactus.js
const validateContactUsInput = require("../../validation/contactus");

// Load Contact model
const Contact = require("../../models/Contact");

router.post("/contactus", (req, res) => {
  // Form validation
  const { errors, isValid } = validateContactUsInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Contact.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    date: req.body.date
  })
    .then(dbContact => {
      console.log(dbContact);
    })
    .catch(({ message }) => {
      console.log(message);
    });

  Contact.find({})
    .then(dbContact => {
      res.json(dbContact);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;
