import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "../Input/Input";
import Button from "../Button";

class InputWindow extends Component {
  render() {
    return (
      <div className="input-window">
        <div className="input-window__form">
          <Input
            placeholder={this.props.placeholder}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            onKeyUp={this.props.onKeyUp}
            value={this.props.value}
            name={this.props.name}
          />
        </div>
        <div className="input-window__action">
          <Button
            text="Send"
            icon={<i className="lnr lnr-upload"></i>}
            onClick={this.props.onSubmit}
          />
        </div>
      </div>
    );
  }
}

InputWindow.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func
};

export default InputWindow;
