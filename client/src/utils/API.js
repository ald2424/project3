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
    },
    // Gets schedule
    getSchedule: function(userId) {
        return axios.get("/API/schedule/" + userId);
    },
    // Deletes an item in the schedule with given id
    deleteSchedule: function(id) {
        return axios.delete("/API/schedule/" + id);
    },
    // Saves an event to database
    saveSchedule: function(scheduleData) {
        return axios.post("/API/schedule/", scheduleData);
    }
};
