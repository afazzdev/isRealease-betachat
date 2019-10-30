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
      {console.log(
        "my id : ",
        myId,
        "my id 2 :",
        myId2,
        "isEqual : ",
        isEqual(),
        " props sender : ",
        props.sender
      )}
      <div className="message-box__body">
        <div className="message-box__content">
          <div>
            {props.children}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
