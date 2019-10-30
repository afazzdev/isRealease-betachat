import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Sidebar from "../Sidebar";
import MainWindow from "../MainWindow";

// import { useSelector, connect } from "react-redux";

class Dashboard extends React.Component {
  // receiver = Object.keys(this.props.listReceiver);
  // state = {
  //   activeReceiver: this.receiver[0],
  //   idReceiver: 0
  // };

  render() {
    // const listReceiver = useSelector(state => state.messages);

    // const receiver = Object.keys(this.props.listReceiver);

    // const [activeReceiver, changeReceiver] = React.useState(receiver[0]);

    // const handleClick = e => {
    //   this.setState({
    //     activeReceiver: e.target.innerText,
    //     idReceiver: e.target.id
    //   });
    //   console.log(this.state.activeReceiver, this.state.idReceiver);
    // };

    return (
      <Router>
        <div className="app">
          <Sidebar
          // onClick={handleClick}
          // activeReceiver={this.state.activeReceiver}
          // idReceiver={this.state.idReceiver}
          />
          <MainWindow
          // activeReceiver={this.state.activeReceiver}
          // idReceiver={this.state.idReceiver}
          />
        </div>
      </Router>
    );
  }
}

// const mapStateToProps = state => ({
//   listReceiver: state.messages
// });

export default // connect(
//   mapStateToProps,
//   {}
// )
Dashboard;

// const Dashboard = () => {
//   const listReceiver = useSelector(state => state.messages);

//   const receiver = Object.keys(listReceiver);

//   const [activeReceiver, changeReceiver] = React.useState(receiver[0]);

//   const handleClick = e => {
//     changeReceiver(e.target.innerText);
//     console.log(activeReceiver);
//   };

//   return (
//     <Router>
//       <div className="app">
//         <Sidebar onClick={handleClick} />
//         <MainWindow activeReceiver={activeReceiver} />
//       </div>
//     </Router>
//   );
// };
