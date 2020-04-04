import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";


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

        <Slider 
            style={{
                width: "100%",
                marginLeft: "275px",
                marginTop: "100px",
            }}>{announcements.map((announcement, index) =>
                <div key={index}
                    style={{
                        width: "70%",
                        height: "100%",
                        position: "absolute",
                        overflow: "hidden",
                        border: "black 2px solid",
                        marginLeft: "180px"
                    }}>
                    <h2 style={{
                        paddingTop: "5%",
                        fontFamily: "Great Vibes, cursive",
                        fontSize: "5em",
                        fontStyle: "italic",
                        paddingLeft: "20px",
                        paddingRight: "20px"
                    }}>{announcement.title}</h2>
                    <div style={{
                        fontSize: "2em",
                        paddingLeft: "20px",
                        paddingRight: "20px"
                    }}>{announcement.message}</div>
                </div>
            )}
        </Slider>
    )
}

export default ViewAnnouncementsPage;