import React from "react";
import "./style.css";

function MessageList(props) {
  return (
    <div className="container messageCard">
      <ul className="list" style={{ border: "1px solid black" }}>
        <div  key={props._id}>
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
