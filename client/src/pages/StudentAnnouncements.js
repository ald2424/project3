import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

function ViewAnnouncementsPage() {
    // Setting components state
    const [announcements, setAnnouncements] = useState([])

    // Load announcements, store with setAnnouncements
    useEffect(() => {
        loadAnnouncements()
    }, [])

    // Sets loaded info to announcements
    function loadAnnouncements() {
        API.getAnnouncements()
            .then(res =>
                setAnnouncements(res.data)
            )
            .catch(err => console.log(err));
    };

      return (

        <Slider>
        {announcements.map((announcement, index) => <div key={index}>
          <h2>{announcement.title}</h2>
          <div>{announcement.message}</div>
        </div>)}
        </Slider>
      )
}

export default ViewAnnouncementsPage;