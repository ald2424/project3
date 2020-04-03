import axios from "axios";

export default {

    // Gets all announcements
    getAnnouncements: function() {
        return axios.get("/API/announcements/");
    },
    // Deletes an announcement with given id
    deleteAnnouncement: function(id) {
        return axios.delete("/API/announcements/" + id);
    },
    // Saves an announcement to database
    saveAnnouncement: function(announcementData) {
        return axios.post("/API/announcements/", announcementData);
    }
};
