import React from "react";
import PropTypes from "prop-types";

import MessageBox from "../MessageBox";
import { useSelector } from "react-redux";
// import Badge from "../Badge";

const MessageWindow = props => {
  const listReceiver = useSelector(state => state.messages);
  const detailChat = useSelector(state => state.messages.detailChat);
  // const receiver = Object.keys(listReceiver);

  return (
    <div className="message-window">
      {detailChat
        ? listReceiver.detailChat.map((message, i) => (
            <MessageBox sender={message.sender} key={i} index={i}>
              {message.chat}
            </MessageBox>
          ))
        : ""}
      {/* {console.log("receiver :", receiver[props.idReceiver])} */}
    </div>
  );
};

MessageWindow.propTypes = {
  messages: PropTypes.array
};

export default MessageWindow;
