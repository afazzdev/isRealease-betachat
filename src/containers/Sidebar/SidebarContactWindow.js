import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ContactWindow from "../../components/ContactWindow";
import Setting from "../../components/Setting";
import ActiveMessage from "../../components/ActiveMessage";

class SidebarContactWindow extends Component {
  render() {
    return (
      <div className="sidebar__contact-window">
        <Route
          exact
          path="/"
          component={() => (
            <ActiveMessage
              onClick={this.props.onClick}
              activeReceiver={this.props.activeReceiver}
              idReceiver={this.props.idReceiver}
            />
          )}
        />
        <Route path="/contacts" render={() => <ContactWindow />} />
        <Route path="/setting" component={Setting} />
      </div>
    );
  }
}

export default withRouter(connect(state => ({}))(SidebarContactWindow));
