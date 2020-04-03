const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Contact model
const Contact = require("../../models/Contact");

// *****************************REGISTER ROUTE*****************************
// @route POST api/contacts/register
// @desc Register contact
router.post("/register", (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  });
});

module.exports = router;
