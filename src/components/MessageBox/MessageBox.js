import React from "react";

const MessageBox = props => {
  const myId = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState")).loginData.data.id
    : "";

  const myId2 = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState")).messages.detailChat.map(
        dat => dat.id_user_from
      )
    : "";
  function isEqual() {
    // comapring each element of array
    for (var i = props.index; i < myId2.length; i++)
      if (myId2[i] === myId) {
        return true;
      } else {
        return false;
      }
  }

  return (
    <div
      className={`message-box ${
        props.sender === myId || isEqual() ? "message-box--from-me" : ""
      } `}
    >
      <div className="message-box__body">
        <div className="message-box__meta">
          {props.meta && props.meta}
          {props.date && <div className="message-box__date">{props.date}</div>}
        </div>
        <div className="message-box__content">
          <div>
            {props.chat}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
