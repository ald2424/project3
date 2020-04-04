const express = require("express");
const router = express.Router();

// Load user model
const Schedule = require("../../models/ScheduleModel");

// Getting announcements
router.get("/:userId", (req, res) => {
    const userId = req.params.userId
    Schedule.find({instructorId: req.params.userId, studentId: req.params.userId}) .then(function (data) {
        res.json(data)
    })
});

// Creating announcements
router.post("/:userId", (req, res) => {
    Schedule.create(req.body) .then(function (data) {
        res.json(data)
    })
});

// Deleting announcements
router.delete("/:userId/:Id", (req, res) => {
    Schedule.deleteOne({_id:req.params.id}) .then(function (data) {
        res.json(data)
    })
});

module.exports = router;