const express = require("express");
const router = express.Router();

// Load user model
const Announcements = require("../../models/Announcements");

// Getting announcements
router.get("/", (req, res) => {
    Announcements.find({}) .then(function (data) {
        res.json(data)
    })
});

// Creating announcements
router.post("/", (req, res) => {
    Announcements.create(req.body) .then(function (data) {
        res.json(data)
    })
});

// Deleting announcements
router.delete("/:id", (req, res) => {
    Announcements.deleteOne({_id:req.params.id}) .then(function (data) {
        res.json(data)
    })
});

module.exports = router;