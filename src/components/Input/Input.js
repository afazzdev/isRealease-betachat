import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  render() {
    return (
      <textarea
        className="input"
        ref={input => (this.input = input)}
        autoFocus={true}
        onKeyUp={this.props.onKeyUp}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value}
        name={this.props.name}
      ></textarea>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func
};

export default Input;
