import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { update } from "../../redux/actions/UpdateProfileAction";

import ReactCodeinput from "react-code-input";

class Setting extends React.Component {
  state = {
    id: this.props.data.id,
    username: this.props.data.username,
    phone: this.props.data.phone,
    photo: this.props.data.photo,
    password: "password",
    editable: false,
    hidden: "fa-eye-slash",
    type: "password",
    avatar: []
  };

  render() {
    const {
      id,
      username,
      phone,
      photo,
      editable,
      password,
      hidden,
      type,
      avatar
    } = this.state;

    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("reduxState");
      window.location.reload();
      this.props.history.push("/login");
    };

    const handleSubmit = e => {
      e.preventDefault();
      this.setState({ editable: false });
      this.setState({
        hidden: "fa-eye-slash",
        type: "password",
        password: "password"
      });

      const updatedData = {
        id: id,
        username: username,
        phone: phone,
        password: password,
        photo: avatar.length === 0 ? this.props.data.photo : avatar
      };
      console.log(updatedData);
      this.props.update(updatedData);
    };
    const handleEdit = e => {
      e.preventDefault();
      if (!editable) {
        this.setState({ editable: true, password: "" });
      } else {
        this.setState({ editable: false });
      }
    };

    const handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const handleChangePin = e => {
      this.setState({ password: e.toLowerCase() });
      console.log(this.state.password);
    };

    const onHide = e => {
      e.preventDefault();

      if (type === "password") {
        this.setState({ hidden: "fa-eye", type: "text" });
      } else {
        this.setState({ hidden: "fa-eye-slash", type: "password" });
      }
    };

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
        <form className="profile-group" onSubmit={handleSubmit}>
          <div>
            <img
              src={photo}
              alt="Your face"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            {editable && (
              <div className="profile-group">
                <input
                  className="profile-button"
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                />
                <label htmlFor="avatar" className="profile-button">
                  Choose a photo
                </label>
              </div>
            )}
          </div>
          <div className="profile-group">
            <div className="profile-label">Username</div>
            <input
              type="text"
              className="profile-text"
              value={username}
              name="username"
              onChange={handleChange}
              disabled={!editable}
            />
          </div>
          <div className="profile-group">
            <div className="profile-label">Phone</div>
            <input
              type="text"
              className="profile-text"
              value={phone}
              name="phone"
              onChange={handleChange}
              disabled={!editable}
            />
          </div>
          <div className="profile-label">Password</div>
          <div className="profile-group">
            <ReactCodeinput
              fields={6}
              type={type}
              value={password}
              name="password"
              onChange={handleChangePin}
              disabled={!editable}
              {...props}
            />
            {editable && (
              <button
                onClick={onHide}
                className="profile-button hidden-button setting-button"
              >
                <i className={`fas ${hidden}`}></i>
              </button>
            )}
          </div>
          {editable ? (
            <div>
              <button
                className="profile-button"
                type="submit"
                disabled={password.length < 6 ? true : false}
              >
                save
              </button>{" "}
              <button className="profile-button" onClick={handleEdit}>
                cancel
              </button>
            </div>
          ) : (
            <button className="profile-button" onClick={handleEdit}>
              edit
            </button>
          )}
        </form>
        <div className="profile-group">
          <input
            type="button"
            className="profile-button"
            onClick={handleLogout}
            value="Logout"
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.loginData.data
});

export default connect(
  mapStateToProps,
  { update }
)(withRouter(Setting));
