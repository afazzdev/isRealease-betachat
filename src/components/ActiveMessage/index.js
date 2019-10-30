import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { newChat } from "../../redux/actions/MessageAction";

import Contact from "../Contact";

const ActiveMessage = props => {
  const listReceiver = useSelector(state => state.messages);
  const dispatch = useDispatch();

  const isLogged = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState")).messages.chat
    : "";

  return (
    <>
      <div className="input-group"></div>
      <div className="contact-window">
        {/* {console.log("list receiver:", listReceiver)} */}
        {isLogged
          ? listReceiver.chat.map((contact, index) => (
              <Contact
                key={contact.username}
                onClick={() => {
                  dispatch(newChat(listReceiver.chat[index]));
                  // props.history.push("/");
                }}
                image={contact.photo}
                title={contact.username}
                meta={contact.phone}
                date={contact.updated_at}
                active={props.activeContactId === contact.id ? true : false}
              />
            ))
          : ""}
      </div>
    </>
  );
};

export default ActiveMessage;

// class ActiveMessage extends React.Component {
//   state = {};
//   render() {
//     return (
//       <>
//         {/* {this.props.chats.map(chat => (
//           <div>{chat.id}</div>
//         ))} */}
//       </>
//     );
//   }
// }

// // const mapStateToProps = state => ({
// //   chats: state.messages.messageSatu
// // });

// export default connect()(ActiveMessage);
// //   mapStateToProps,
// //   {}
