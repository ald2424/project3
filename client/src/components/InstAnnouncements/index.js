import React from "react";
import './style.css';
import Announcements from "../../utils/Announcements"

function InstAnnouncements() {

  return (

    <div className="container">
      <h1 className="smFonts text-center pb-5">Announcements</h1>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="">
            <form>
              <input type="text" name="name" placeholder="Title" />
              <input type="text" name="name" placeholder="Information" />

              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3">Delete Announcement
                        </button>

              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3">Add Announcement
                        </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstAnnouncements;