const express = require("express");
const router = express.Router();

// Load Contact model
const Contact = require("../../models/Contact");

// *****************************REGISTER ROUTE*****************************
// @route POST api/contacts/register
// @desc Register contact
router.post("/register", (req, res) => {
  Contact.findOne({
    name: req.body.email,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  }).then(none => {
    if (none) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newInstructor = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
      });
    }
  });
});

module.exports = router;
