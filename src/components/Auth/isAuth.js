import React from "react";
import { withRouter } from "react-router-dom";
import { isMobile } from "react-device-detect";

const AuthPage = OriginalComponent => {
  class NewComp extends React.Component {
    state = {};
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    UNSAFE_componentWillMount() {
      const { history, location } = this.props;
      if (isMobile && location.pathname !== "/register") {
        history.push("/");
      } else if (
        !localStorage.getItem("token") &&
        location.pathname === "/login"
      ) {
        localStorage.removeItem("reduxState");
      } else if (
        location.pathname === "/register" &&
        !localStorage.getItem("token")
      ) {
        history.push("/register");
      } else if (localStorage.getItem("token")) {
        history.push("/dashboard");
      } else {
        history.push("/login");
      }
    }
    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  return withRouter(NewComp);
};

export default AuthPage;
