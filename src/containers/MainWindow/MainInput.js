import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import InputWindow from "../../components/InputWindow";

import { sendMessage } from "../../redux/actions/MessageAction";

class MainInput extends Component {
  render() {
    return (
      <div className="main-window__input-window">
        <InputWindow
          placeholder="Say something..."
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}
          onKeyUp={this.props.onKeyUp}
          value={this.props.value}
          name={this.props.name}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({}),
    { sendMessage }
  )(MainInput)
);
