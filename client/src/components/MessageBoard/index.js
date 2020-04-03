import React, { Component } from "react";

function MessageList(props) {
    return (
      <div className="container">
        <h1>Incoming Messages from ContactUs</h1>
        <ul className="list-group">
          {props.contacts.map(item => (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default MessageList;
