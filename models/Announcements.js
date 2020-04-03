const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnouncementsSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      }
});

const Announcements = mongoose.model("announcements", AnnouncementsSchema);

module.exports = Announcements;