import React from "react";

function MessageList(props) {
  return (
    <div className="container">
      <h1>Incoming Messages from ContactUs</h1>
      <ul className="list">
        <div style={{ border: "1px solid black" }} key={props._id}>
          <h3>Name: {props.name}</h3>
          <p>Email: {props.email}</p>
          <p>Phone #: {props.phone}</p>
          <p>Message Left: {props.message}</p>
          <p>Date Left: {props.date}</p>
        </div>
      </ul>
    </div>
  );
}

export default MessageList;
