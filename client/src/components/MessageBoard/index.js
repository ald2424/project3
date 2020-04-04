import React from "react";
import PropTypes from "prop-types";

function MessageList(props) {
    return (
      <div className="container">
        <h1>Incoming Messages from ContactUs</h1>
        <ul className="list">
          {props.contacts.map(item => (
            <li className="listgroup" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default MessageList;
