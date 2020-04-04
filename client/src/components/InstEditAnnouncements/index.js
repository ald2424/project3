import './style.css';
import Announcements from "../../utils/Announcements";
import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import AddBtn from "../AddBtn";
import API from "../../utils/API";
import { set } from 'mongoose';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';

function InstAnnouncements() {
  // Test
  const [formObject, setFormObject] = useState({ title: "", message: "" })

  const [announcements, setAnnouncements] = useState([])

  // Load announcements, store with setAnnouncements
  useEffect(() => {
    loadAnnouncements()
  }, [])

  // Deletes an announcement from database with id, reloads announcements from db
  const deleteAnnouncement = event => {
    const id = event.target.id
    API.deleteAnnouncement(id).then(res => loadAnnouncements())
      .catch(err => console.log(err));
  };

  // Updates component state for input field
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function loadAnnouncements() {
    API.getAnnouncements()
      .then(res =>
        setAnnouncements(res.data)
      )
      .catch(err => console.log(err));
  };




  // When announcement is submitted, use API.saveAnnouncement to save data, reload announcements
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(formObject);
    if (formObject.title && formObject.message) {
      API.saveAnnouncement({
        title: formObject.title,
        message: formObject.message
      }).then(res => loadAnnouncements())
        .then(res => {
          setFormObject({ title: "", message: "" })
          document.getElementById("message").value = ""
        })
        .catch(err => console.log(err));
    }
  };

  return (

    <div className="formContent flex-container">
      <h1 className="smFonts text-center pb-5">Edit Announcements</h1>
      <Link to="/dashboard" className="btn btn-small waves-effect waves-light hoverable red accent-3" id="dashboardBtn"> Back to Dashboard</Link>
      <div className="row text-center">
        <div className="col-md-4">

          {/* Add Annnouncements */}
          <div className="card">
            <div className="card-content">
              <p>Add announcements to post to the Announcements page.</p>
            </div>
            <div className="card-tabs">
              <input type="text" name="title" value={formObject.title} onChange={handleInputChange} placeholder="Title" />
              <br></br>
              <br></br>
              <textarea type="text" name="message" rows="8" id="message" onChange={handleInputChange} placeholder="Message"></textarea>
              <br></br>
              <br></br>
              <ul className="tabs tabs-fixed-width">
                <button
                  type="submit"
                  className="btn btn-medium waves-effect waves-light hoverable red accent-3" onClick={handleFormSubmit}> Add
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* Delete Announcements */}

          <div className="card">

            <div className="card-content">
              <p>Delete announcements to post to the Announcements page.</p>
            </div>

            <div className="card-tabs">

              {announcements.map((announcement => (

                <ul className="collection">
                  <li className="collection-item">
                    <p className="title">{announcement.title}</p>
                    <br></br>
                    <p className="message">{announcement.message}</p>
                  </li>
                  <button
                    type="submit"
                    className="btn btn-medium waves-effect waves-light hoverable red accent-3" onClick={deleteAnnouncement} id={announcement._id}> Delete
                </button>
                </ul>
              )))}
              <br></br>
              <br></br>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstAnnouncements;
