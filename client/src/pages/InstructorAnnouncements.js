import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Announcements from "../utils/Announcements"
import InstAnnouncements from "../components/InstAnnouncements";

function InstructorAnnouncements() {
    return (
        <div>
            <InstAnnouncements />
        </div>
    )
}

export default InstructorAnnouncements;