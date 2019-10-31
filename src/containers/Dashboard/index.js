import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Sidebar from "../Sidebar";
import MainWindow from "../MainWindow";

class Dashboard extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Sidebar />
          <MainWindow />
        </div>
      </Router>
    );
  }
}

export default Dashboard;
