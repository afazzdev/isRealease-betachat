import React from "react";
import TextField from "./InputField/TextField";

import { Link, withRouter } from "react-router-dom";
import SigningIn from "../../containers/LandingPage/signingin";

import { connect } from "react-redux";
import { login } from "../../redux/actions/LoginAction";

import ReactCodeinput from "react-code-input";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      empty: "",
      type: "password",
      hidden: "fa-eye-slash"
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { phone, password } = this.state;
    const login = {
      phone: phone,
      password: password
    };

    // console.log(login);
    this.props.login(login);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangePin = e => {
    this.setState({ password: e.toLowerCase() });
    console.log(this.state.password);
  };

  onHide = e => {
    e.preventDefault();
    const { type } = this.state;

    if (type === "password") {
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

  handleChangePin = e => {
    this.setState({ password: e });
    console.log(this.state.password);
  };

  render() {
    const { empty, type, password } = this.state;
    const { isLoading, errors } = this.props;

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

    return (
      <>
        {localStorage.getItem("token") ? (
          this.props.history.push("/dashboard")
        ) : isLoading ? (
          <SigningIn />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <span className="auth-label">
              <h3>
                <i className="fa fa-fingerprint"></i> Sign in
              </h3>
            </span>
            <TextField
              label="Phone"
              type="number"
              field="phone"
              className="input-text"
              onChange={this.onChange}
              errors={errors}
              empty={empty}
              placeholder="Type your phone here"
              autoFocus={true}
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
                  !this.state.password || !this.state.phone || isLoading
                }
                className="input-button"
                type="submit"
              >
                Login
              </button>
            </div>
            <span className="input-badge">
              <Link to="/register">Don't have an account?</Link>
            </span>
          </form>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.loginData.redirect,
  errors: state.loginData.errors,
  isLoading: state.loginData.isLoading
});

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(LoginPage)
);
