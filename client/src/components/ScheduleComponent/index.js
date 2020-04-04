import React, { useState, useEffect } from "react";
import "./style.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import API from "../../utils/API";

function ScheduleComponent() {

  function loadSchedule() {
    API.getSchedule()
      .then(res =>
        setSchedule(res.data)
      )
      .catch(err => console.log(err));
  };

  const [schedule, setSchedule] = useState([])

  // Load schedule, store with setSchedule
  useEffect(() => {
    loadSchedule()
  }, [])

  return (

    <div className="container">
      <FullCalendar events={[{ title: "Riding Lessons", start: "2020-04-10", end: "2020-04-11" }]} defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
    </div>

  )
}

export default ScheduleComponent;