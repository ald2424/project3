import React from "react";
import "../App.css"
import history from "../utils/history"

function Login(){

    function openInstructorForm() {
        history.push('/instructorform');
        window.location.reload(false);
      }
    
    function openStudentForm() {
        history.push('/studentform');
        window.location.reload(false);
      }

    return(
        <div className="container text-center mx-auto my-5">
            <div className="row mb-5">
                <div className="col-sm-6">
                    <div className="card-body">
                        <h2>Instructor Log In</h2>
                            <br></br>
                        <button type="button" className="btn btn-danger btn-lg" onClick={openInstructorForm}>Sign in Here</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card-body">
                        <h2>Student Log In</h2>
                            <br></br>
                        <button type="button" className="btn btn-danger btn-lg" onClick={openStudentForm}>Sign in Here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;