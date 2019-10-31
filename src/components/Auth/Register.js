import React, { Component } from "react";
import TextField from "./InputField/TextField";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import CreatingNewAccount from "../../containers/LandingPage/creatingNewAccount";
import { API } from "../../helpers/ApiHelper";
import ReactCodeinput from "react-code-input";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      phone: "",
      password: "",
      // passwordConfirmation: "",
      errors: "",
      isLoading: false,
      wrong: false,
      type: "password",
      hidden: "fa-eye-slash"
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangePin = e => {
    this.setState({ password: e });
  };

  handleSubmit = e => {
    this.setState({ errors: "", isLoading: true });
    e.preventDefault();

    const dataInput = {
      username: this.state.username,
      password: this.state.password,
      phone: this.state.phone
    };
    console.log(dataInput);

    axios
      .post(`${API}/register`, dataInput)
      .then(res => {
        this.setState({
          username: "",
          password: "",
          phone: "",
          isLoading: false
        });
        this.props.history.push("/login");
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false,
          errors: err
        });
      });
  };

  onHide = e => {
    e.preventDefault();
    if (this.state.type === "password") {
      this.setState({ hidden: "fa-eye", type: "text" });
    } else {
      this.setState({ hidden: "fa-eye-slash", type: "password" });
    }
  };

  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.handleSubmit(e);
    }
  };

  render() {
    const { isLoading, password, type } = this.state;
    const props = {
      inputStyle: {
        fontFamily: "monospace",
        margin: "4px",
        MozAppearance: "textfield",
        width: "1.5rem",
        borderRadius: "4px",
        fontSize: "14px",
        height: "1.5rem",
        textAlign: "center",
        color: "#2F3760",
        border: "1px solid #ebebeb"
      },
      inputStyleInvalid: {
        fontFamily: "monospace",
        margin: "4px",
        MozAppearance: "textfield",
        width: "1.5rem",
        borderRadius: "4px",
        fontSize: "14px",
        height: "1.5rem",
        textAlign: "center",
        color: "red",
        border: "1px solid #ebebeb"
      }
    };

    const dataInput = {
      username: this.state.username,
      password: this.state.password,
      phone: this.state.phone
    };
    const object1 = Object.values(dataInput);
    return (
      <>
        {isLoading ? (
          <CreatingNewAccount />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <span className="auth-label">
              <h3>
                <i className="fa fa-fingerprint"></i> Sign up
              </h3>
            </span>
            <TextField
              label="Username"
              type="text"
              field="username"
              className="input-text"
              errors={this.state.errors}
              empty={this.state.empty}
              onChange={this.onChange}
              placeholder="Type your username here"
              autoFocus={true}
              value={this.state.username}
            />
            <TextField
              label="Phone"
              type="number"
              field="phone"
              className="input-text"
              errors={this.state.errors}
              empty={this.state.empty}
              onChange={this.onChange}
              placeholder="Type your phone here"
              value={this.state.phone}
            />
            <span className="input-group">
              <span className="input-label">Password</span>
              <span className="input-label">(only accept number)</span>
            </span>
            <div className="profile-group">
              <ReactCodeinput
                fields={6}
                type={type}
                pattern="[0-9]+"
                value={password}
                name="password"
                onChange={this.handleChangePin}
                autoFocus={false}
                title="Only number!"
                {...props}
              />
            </div>

            <div className="input-group">
              <button
                disabled={
                  !this.state.username ||
                  !this.state.password ||
                  !this.state.phone ||
                  isLoading
                }
                className="input-button"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <span className="input-badge">
              <Link to="login">Already have an account?</Link>
            </span>
          </form>
        )}
      </>
    );
  }
}

export default withRouter(RegisterPage);
