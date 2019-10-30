import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MainInput from "./MainInput";
import MessageWindow from "../../components/MessageWindow";
import WindowTopBar from "../../components/WindowTopBar";

import { sendMessage, initialMsg } from "../../redux/actions/MessageAction";

class MainWindow extends Component {
  constructor() {
    super();
    this.state = {
      messages: "",
      sender: localStorage.getItem("reduxState")
        ? JSON.parse(localStorage.getItem("reduxState")).loginData.data.id
        : "",
      name: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // const { messages } = this.state;
    // console.log("idreceiver :", this.props.idReceiver);

    const datas = {
      messages: this.state.messages,
      // sender: this.state.sender,
      name: this.props.activeReceiverUsername,
      id_user_from: this.state.sender,
      id_user_to: this.props.activeReceiverId
    };

    if (e.target.value) {
      this.props.sendMessage(datas);
      console.log("will send: ", datas);
    }
  };

  handleChange = e => {
    this.setState({ messages: e.target.value });
    // console.log(this.state.messages);
  };

  handleKeyUp = e => {
    e.preventDefault();

    if (
      e.keyCode === 13 &&
      !e.ctrlKey &&
      this.handleSubmit &&
      this.state.messages.trim().length !== 0
    ) {
      this.handleSubmit(e);
      console.log(this.state);

      this.setState({ messages: "" });
    } else if (
      e.keyCode === 13 &&
      e.ctrlKey &&
      this.state.messages.trim().length !== 0
    ) {
      e.target.value = e.target.value + "\n";
      return true;
    }
  };

  componentDidMount() {
    this.setState({ name: this.props.activeReceiverUsername });
    this.props.initialMsg(this.state.sender);
    // console.log("snder: ", this.state.sender);
  }

  render() {
    const {
      // messageState,
      activeReceiverUsername,
      activeReceiverMeta
      // idReceiver
    } = this.props;
    // const receiverList = Object.keys(messageState);

    return (
      <div className="main-window">
        <div className="main-window__top-bar">
          <WindowTopBar
            title={activeReceiverUsername}
            meta={activeReceiverMeta}
          />
        </div>
        <div className="main-window__message-window">
          <MessageWindow
            messages={this.props.messages}
            // idReceiver={idReceiver}
          />
        </div>
        <MainInput
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          value={this.state.messages}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messageState: state.messages,
  messages: state.messages.messages,
  activeReceiverUsername: state.messages.activeChat
    ? state.messages.activeChat.username
    : "",
  activeReceiverMeta: state.messages.activeChat
    ? state.messages.activeChat.phone
    : "",
  activeReceiverId: state.messages.activeChat
    ? state.messages.activeChat.id
    : ""
});

export default withRouter(
  connect(
    mapStateToProps,
    { sendMessage, initialMsg }
  )(MainWindow)
);
