const express = require("express");
const router = express.Router();

// Load Contact model
const Contact = require("../../models/Contact");

router.post("/", (req, res) => {
    Contact.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        date: req.body.date
    }).then(dbContact => {
        console.log(dbContact);
    }).catch(({ message }) => {
        console.log(message);
    })
})

module.exports = router;
