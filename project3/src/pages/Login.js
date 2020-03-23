import React from "react";
import "../App.css"

function Login(){
    return(
        <div className="container text-center mx-auto my-5">
            <div className="row mb-5">
                <div className="col-sm-6">
                    <div className="card-body">
                        <h2>Instructor Log In</h2>
                            <br></br>
                        <button type="button" class="btn btn-danger btn-lg">Sign in Here</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card-body">
                        <h2>Student Log In</h2>
                            <br></br>
                        <button type="button" class="btn btn-danger btn-lg">Sign in Here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;